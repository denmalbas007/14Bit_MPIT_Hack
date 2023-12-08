//
//  ContentView.swift
//  TimeBus
//
//  Created by Vadim Bykov on 07.12.2023.
//

import SwiftUI

struct ContentView: View {
    @State private var shouldSwitchView = false
    
    var body: some View {
        if shouldSwitchView {
            LoginView();
        } else {
            VStack {
                Rectangle()
                    .foregroundColor(.clear)
                    .background(Color(red: 0.09, green: 0.09, blue: 0.13))
                    .overlay(
                        Image("Logo")
                            .padding(),
                        alignment: .center
                    )
            }.onAppear {
                DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
                    shouldSwitchView = true
                }
            }
        }
        
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
