<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Team as TeamResource;
use App\Http\Resources\TeamCollection as TeamCollection;
use App\Models\Team;


class TeamController extends Controller
{
    public function index(){
        return new TeamCollection(Team::all());
    }

     public function show($id){
        return new TeamResource(Team::findOrFail($id));
    }
}
