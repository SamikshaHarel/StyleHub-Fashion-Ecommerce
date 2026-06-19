package com.stylehub.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stylehub.service.EmailService;
import com.stylehub.service.OtpService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private OtpService otpService;

    @Autowired
    private EmailService emailService;

    // SEND OTP
    @PostMapping("/send-otp")
    public HashMap<String, String> sendOtp(@RequestBody HashMap<String, String> request) {

        String email = request.get("email");

        String otp = otpService.generateOtp(email);
        emailService.sendOtpEmail(email, otp);

        HashMap<String, String> response = new HashMap<>();
        response.put("message", "OTP sent successfully");

        return response;
    }

    // VERIFY OTP
    @PostMapping("/verify-otp")
    public HashMap<String, String> verifyOtp(@RequestBody HashMap<String, String> request) {

        String email = request.get("email");
        String otp = request.get("otp");

        boolean valid = otpService.verifyOtp(email, otp);

        HashMap<String, String> response = new HashMap<>();

        if (valid) {
            response.put("message", "OTP verified successfully");
        } else {
            response.put("message", "Invalid OTP");
        }

        return response;
    }

    // LOGIN
@PostMapping("/login")
public HashMap<String, String> login(
        @RequestBody HashMap<String, String> request) {

    String username = request.get("username");
    String password = request.get("password");

    System.out.println("USERNAME = " + username);
    System.out.println("PASSWORD = " + password);

    HashMap<String, String> response = new HashMap<>();

    if ("admin".equals(username.trim()) &&
        "123".equals(password.trim())) {

        response.put("token", "stylehub-token");
        response.put("message", "Login successful");

    } else {

        response.put("message", "Invalid username or password");
    }

    return response;
}

}