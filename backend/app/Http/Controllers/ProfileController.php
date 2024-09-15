<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class ProfileController extends Controller
{
     public function getProfile()
    {
        $user = Auth::user();
        if ($user) {
            return response()->json($user);
        } else {
            return response()->json(['error' => 'User not found'], 404);
        }
    }

    public function updateProfile(Request $request)
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }   
        $fields = $request->validate([
            'name' => 'required|string|max:255',
            'rollno' => 'required|string|max:255',
            'email' => 'required|email|max:255',
        ]);
        if ($user instanceof User) {

        $user->update($fields);
        return response()->json(['message' => 'Profile updated successfully'], 200);
        }
    }
    
}
