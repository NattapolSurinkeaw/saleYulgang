<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'keywords',
        'slug',
        'link',
        'image',
        'parent_id',
        'position',
        'meta_title',
        'meta_description',
        'meta_keywords',
        'h1',
        'h2',
        'priority',
        'status_display',
    ];
}
