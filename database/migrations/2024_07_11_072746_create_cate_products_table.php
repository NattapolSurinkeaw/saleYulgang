<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cate_products', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->boolean('status_display');
            $table->integer('priority');
            $table->timestamps();
        });

        DB::table('cate_products')->insert([
            [
                'id' => 1,
                'title' => 'ตัวละคร',
                'status_display' => 1,
                'priority' => 1
            ],
            [
                'id' => 2,
                'title' => 'อุปกรณ์',
                'status_display' => 1,
                'priority' => 2
            ],
            [
                'id' => 3,
                'title' => 'อื่นๆ',
                'status_display' => 1,
                'priority' => 3
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cate_products');
    }
};
