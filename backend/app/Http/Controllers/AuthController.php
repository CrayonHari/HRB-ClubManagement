<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request ){
        
        $fields  = $request->validate([
            'name' =>'required|max:255',
            'rollno' =>'required|max:255',
            'email'=>'required|email|unique:users',
            'password'=>'required|confirmed',
            'role' => 'user', 

        ]);

        $user = User::create($fields);

        $token = $user->createToken($request->name);

        return response()->json([
        'user'=>$user,
        'role' => $user->role,
        'token'=>$token->plainTextToken
    ], 200);
    }

    public function login(Request $request)
{
    // Validate email and password
    $request->validate([
        'email' => 'required|email|exists:users',
        'password' => 'required'
    ]);

    // Find the user by email
    $user = User::where('email', $request->email)->first();

    // Check if the password is correct
    if (!$user || !Hash::check($request->password, $user->password)) {
        return response()->json([
            'message' => 'The provided credentials are incorrect.'
        ], 401);
    }

    // Create token for the user
    $token = $user->createToken($user->name);

    // Return user and token
    return response()->json([
        'user' => $user,
        'token' => $token->plainTextToken,
        'role' => $user->role
    ], 200);
}



    public function logout(Request $request){
        $request->user()->tokens()->delete();

        return response()->json( [
            'message' => 'You are logged out.'
        ], 200);
    }
    
} 

