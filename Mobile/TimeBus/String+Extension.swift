//
//  String+Extension.swift
//  TimeBus
//
//  Created by Vadim Bykov on 08.12.2023.
//

import UIKit
extension String{
    var encodeUrl : String
    {
        return self.addingPercentEncoding(withAllowedCharacters: NSCharacterSet.urlQueryAllowed)!
    }
    var decodeUrl : String
    {
        return self.removingPercentEncoding!
    }
}
