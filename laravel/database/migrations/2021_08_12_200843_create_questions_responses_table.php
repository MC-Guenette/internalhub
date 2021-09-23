<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionsResponsesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questions_responses', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('question_id')->unsigned()->index()->nullable();
            $table->foreign('question_id')->references('id')->on('questions')->onDelete('cascade');
            $table->string('response');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('questions_responses');
    }
}
