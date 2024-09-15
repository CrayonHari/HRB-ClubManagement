<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
    use HasFactory;

    protected $fillable = [
        'club_name',
        'club_nick_name',
        'logo_image',
        'description',
        'faculty_names',
        'heads',
        'members',
    ];

    protected $casts = [
        'faculty_names' => 'array',
        'heads' => 'array',
        'members' => 'array',
    ];
}
