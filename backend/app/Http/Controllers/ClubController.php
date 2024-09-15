<?php

namespace App\Http\Controllers;

use App\Models\Club;
use App\Models\User;
use Illuminate\Http\Request;

class ClubController extends Controller
{
    public function index()
    {
        $clubs = Club::all();
        return response()->json($clubs);
    }

     public function show($id)
    {
        $club = Club::find($id); // Find club by its ID
        if (!$club) {
            return response()->json(['message' => 'Club not found'], 404);
        }

        return response()->json($club, 200);
    }

    public function getUsersByRollnos(Request $request)
    {
        $rollnos = $request->input('rollnos'); // Expecting an array of roll numbers

        // Fetch users where rollno is in the provided list
        $users = User::whereIn('rollno', $rollnos)->get();

        return response()->json($users);
    }
}
