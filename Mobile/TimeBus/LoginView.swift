//
//  LoginView.swift
//  TimeBus
//
//  Created by Vadim Bykov on 07.12.2023.
//

import SwiftUI

struct LoginView: View {
    @State private var SignInViewSwitch = false
    @State private var SignUpViewSwitch = false
    
    @State private var isRecording = false
    
    @StateObject var speechRecognizer = SpeechRecognizer()
    
    @State private var responseIntention = ""
    
    var body: some View {
        //        if SignInViewSwitch {
        //            SignInView()
        //        } else if SignUpViewSwitch {
        //            SignUpView()
        //        }
        //        else {
        //            ZStack(alignment: .center) {
        //                Image("bg")
        //                    .resizable()
        //                    .scaledToFill()
        //                    .edgesIgnoringSafeArea(.all)
        //                    .frame(width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height)
        //                    .overlay(
        //                        Image("Logo")
        //                            .padding(),
        //                        alignment: .center
        //                    )
        //                VStack {
        //                    Spacer()
        //                    Button(action: {
        //                        SignInViewSwitch = true
        //                    }) {
        //                        HStack(spacing: 12) {
        //                            Text("Войти")
        //                                .font(Font.custom("Inter", size: 14).weight(.medium))
        //                                .lineSpacing(24)
        //                                .foregroundColor(.white)
        //                        }
        //                        .padding(EdgeInsets(top: 0, leading: 16, bottom: 0, trailing: 16))
        //                        .frame(width: 342, height: 48)
        //                        .background(Color(red: 0, green: 0.44, blue: 0.93))
        //                        .cornerRadius(12)
        //                        .padding(.bottom, 5)
        //                    }
        //
        //                    Button(action: {
        //                        SignUpViewSwitch = true
        //                    }) {
        //                        HStack(spacing: 12) {
        //                            Text("Зарегистрироваться")
        //                                .font(Font.custom("Inter", size: 14).weight(.medium))
        //                                .lineSpacing(24)
        //                                .foregroundColor(.white)
        //                        }
        //                        .padding(EdgeInsets(top: 0, leading: 16, bottom: 0, trailing: 16))
        //                        .frame(width: 342, height: 48)
        //                        .cornerRadius(12)
        //                        .overlay(
        //                            RoundedRectangle(cornerRadius: 12)
        //                                .inset(by: 1)
        //                                .stroke(Color(red: 0.83, green: 0.83, blue: 0.85), lineWidth: 1)
        //                        )
        //                        .padding(.bottom, 50)
        //                    }
        //                }
        //            }
        //        }
        //
        //    }
        VStack {
            Rectangle()
                .foregroundColor(.clear)
                .background(Color(red: 0.09, green: 0.09, blue: 0.13))
                .overlay(
                    VStack{
                        Image("Logo")
                            .padding(.bottom, 34)
                        Spacer()
                        Button(action: {
                            if isRecording {
                                isRecording = false
                                speechRecognizer.stopTranscribing()
                                
                                let transcript = speechRecognizer.transcript
                                
                                let url = URL(string:  "https://14-bit.ru/api/intention?prompt=\"\(transcript)\"".encodeUrl)!
                                
                                let task = URLSession.shared.dataTask(with: url) { data, response, error in
                                    if let error = error {
                                        print("Error with fetching data: \(error)")
                                        return
                                    }
                                    
                                    guard let httpResponse = response as? HTTPURLResponse,
                                          (200...299).contains(httpResponse.statusCode) else {
                                        print("Error with the response, unexpected status code: \(response)")
                                        return
                                    }
                                    
                                    if let data = data,
                                       let dataString = String(data: data, encoding: .utf8) {
                                        print("Response data string:\n \(dataString)")
                                        
                                        responseIntention = dataString
                                    }
                                }
                                
                                task.resume()
                                
                                return
                            }
                            isRecording = true
                            
                            speechRecognizer.resetTranscript()
                            speechRecognizer.startTranscribing()
                            
                            
                        }) {
                            ZStack() {
                                ZStack() {
                                    Rectangle()
                                        .foregroundColor(.clear)
                                        .background(Color(red: 0.12, green: 0.12, blue: 0.16).opacity(0.50))
                                        .cornerRadius(50)
                                        .overlay(
                                            RoundedRectangle(cornerRadius: 50)
                                                .inset(by: 0.25)
                                                .stroke(
                                                    Color(red: 1, green: 1, blue: 1).opacity(0.30), lineWidth: 0.25
                                                )
                                        )
                                        .offset(x: 0, y: 0)
                                    Rectangle()
                                        .foregroundColor(.clear)
                                        .background(Color(red: 0.12, green: 0.12, blue: 0.16).opacity(0.50))
                                        .cornerRadius(50)
                                        .overlay(
                                            RoundedRectangle(cornerRadius: 50)
                                                .inset(by: 0.50)
                                                .stroke(
                                                    Color(red: 1, green: 1, blue: 1).opacity(0.30), lineWidth: 0.50
                                                )
                                        )
                                        .offset(x: 0, y: 0)
                                        .blur(radius: 20)
                                }
                                .frame(width: 256, height: 256)
                                .offset(x: 0, y: 0)
                                ZStack() {
                                    ZStack() {
                                        if isRecording {
                                            Image("mic_in_use").resizable()
                                        } else {
                                            Image("mic")
                                                .resizable()
                                        }
                                        
                                    }
                                    .offset(x: 0, y: 0)
                                }
                                .padding(32)
                                .offset(x: 0, y: 0)
                            }
                            .frame(width: 256, height: 256)
                        }
                        Spacer()
                        Text(responseIntention)
                    }, alignment: .top)
        }
    }
}
struct LoginView_Previews: PreviewProvider {
    static var previews: some View {
        LoginView()
    }
}
