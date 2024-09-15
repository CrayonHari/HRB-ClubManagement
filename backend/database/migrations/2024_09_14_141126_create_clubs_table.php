<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('clubs', function (Blueprint $table) {
            $table->id();
            $table->string('club_name');  // Club name
            $table->string('club_nick_name')->nullable();  // Optional nick name
            $table->string('logo_image')->nullable();  // File path for the logo
            $table->text('description');  // Club description
            $table->json('faculty_names');  // JSON for multiple faculty names
            $table->json('heads');  // Key-value JSON for heads (e.g., president, etc.)
            $table->json('members');  // Key-value JSON for members (e.g., rollno or email)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clubs');
    }
};
