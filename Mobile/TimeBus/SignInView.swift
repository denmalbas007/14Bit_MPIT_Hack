//
//  SignInView.swift
//  TimeBus
//
//  Created by Vadim Bykov on 07.12.2023.
//

import SwiftUI

struct SignInView: View {
    var body: some View {
        VStack {
            Rectangle()
                .foregroundColor(.clear)
                .background(Color(red: 0.09, green: 0.09, blue: 0.13))
                .overlay(
                    VStack {
                        Image("Logo")
                            .padding(.bottom, 34)
                        HStack {
                            Text("Email")
                                .font(Font.custom("Inter", size: 14))
                                .lineSpacing(21)
                                .foregroundColor(.white)
                            Spacer()
                        }.padding(.leading, 24).padding(.bottom, 8)
                        
                        HStack() {
                            HStack() {
                                HStack() {
                                    Text("Введите email")
                                        .font(Font.custom("Inter", size: 12))
                                        .lineSpacing(24)
                                        .foregroundColor(Color(red: 1, green: 1, blue: 1).opacity(0.50))
                                }
                                .padding(EdgeInsets(top: 12, leading: 14, bottom: 12, trailing: 246))
                                .frame(width: 342, height: 48)
                                .background(Color(red: 0.12, green: 0.12, blue: 0.16))
                                .cornerRadius(14)
                                .shadow(
                                    color: Color(red: 0, green: 0, blue: 0, opacity: 0.05), radius: 2, y: 1
                                )
                            }
                            Spacer()
                        }.padding(.horizontal, 24)
                        
                    },
                    alignment: .top
                )
        }
    }
}

struct SignInView_Previews: PreviewProvider {
    static var previews: some View {
        SignInView()
    }
}
