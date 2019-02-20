/* I want to see intro page only */
const QUIZ = [
    {question: "When Ross got a spray tan, what level of tan did he end up?", 
    answer1: "Eight", 
    answer2: "Eleven", 
    answer3: "Fourteen",
    answer4: "Twelve",
    rightAnswer: "Twelve",
    questionImageURL: "https://thumbs.gfycat.com/SameShortEyra-size_restricted.gif",
    answerImageURL: "https://images.hellogiggles.com/uploads/2016/03/25094630/RossTan.gif"},
  
    {question: "Who is the youngest character?", 
    answer1: "Joey", 
    answer2: "Rachel", 
    answer3: "Monica",
    answer4: "Phoebe",
    rightAnswer: "Rachel",
    questionImageURL: "https://i.giphy.com/media/NNPmR7KkdEjja/giphy.webp",
    answerImageURL: "https://media.giphy.com/media/w5M9QgelugIJG/giphy.gif"
    },
  
    {question: "Which of the following characters have never kissed?", 
    answer1: "Phoebe and Monica", 
    answer2: "Rachel and Chandler", 
    answer3: "Joey and Chandler",
    answer4: "Ross and Monica",
    rightAnswer: "Phoebe and Monica",
    questionImageURL: "https://media1.tenor.com/images/173f4c40335c4e606687c69b84258de7/tenor.gif?itemid=4902977",
    answerImageURL: "https://66.media.tumblr.com/3af9d665dc099e431b96e5d7f53725c0/tumblr_pcnndbrJnH1vha0yxo2_r2_500.gif"
    },
  
    {question: "What color is the couch in Central Perk?", 
    answer1: "Dark Green", 
    answer2: "Grey", 
    answer3: "Orange",
    answer4: "Yellow",
    rightAnswer: "Orange",
    questionImageURL: "https://25.media.tumblr.com/2097acbbdb326249bd0afd202af68f30/tumblr_mspygr1ZqT1qcu8s6o1_500.gif",
    answerImageURL: "https://perezhilton.com/wp-content/uploads/2016/08/5a985725c4f2b99479ab0f35568f7e1e.gif"},
  
    {question: "Which characters have never lived together?", 
    answer1: "Ross and Phoebe", 
    answer2: "Joey and Rachel", 
    answer3: "Monica and Phoebe",
    answer4: "Ross and Joey",
    rightAnswer: "Ross and Phoebe",
    questionImageURL: "https://steamusercontent-a.akamaihd.net/ugc/84843325410617213/4F0DF6FD0EB51D19930EB57C9FDFF3958F45C2D3/",
    answerImageURL: "https://66.media.tumblr.com/7b87c5cf00a4b05fa3578363894ae06c/tumblr_osrfg4fHVe1wssgzmo1_500.gif"},
  
  
  ];
  
  
  
  var questionNumber = 0;
  var numberCorrect = 0;
  
  
  /* I want to see intro page only */
  function seeIntro() 
  {
   console.log('`seeIntro` ran');
  $('#question-page').toggleClass("hide");
  $('.next-question-button').toggleClass("hide");
  $('#response').toggleClass("hide");
  $('#results').toggleClass("hide");
  $('.tryAgain').toggleClass("hide");
  
  }
  
  /* I want to start the quiz */
  function startQuiz() 
  {
  console.log('`startQuiz` ran');
  questionNumber = 1;
  console.log(questionNumber);
   
     $('#getStarted').on('click', event =>
     {
        console.log('`getstartedPressed');
        $('#intro-page').toggleClass("hide");
        $('#question-page').toggleClass("hide");
     });
  }
  
  /* I want to click Submit and know whether I got it right or wrong */
  function handleAnswerSubmission()
  {
  
    $('#answers').submit(function (event)
    {
      event.preventDefault();
      console.log('`handleAnswerSubmission` ran');
  
      /* Display Answer Image */
      var answerImageURL = getAnswerImage(questionNumber);
  
      setAnswerImage(answerImageURL);
  
  
      /* Retrieve selection */
      var submittedAnswer = getSubmittedAnswer();
      console.log(submittedAnswer);
      
      /* Retrieve correct answer from "database" */
      correctAnswer = getCorrectAnswer(questionNumber);
      console.log(correctAnswer);
  
      /* Compare selection to correct answer */
      isCorrect = seeIfCorrect(submittedAnswer,correctAnswer);
      console.log(isCorrect);
     
      /* Add to # correct answers counter */
      numberCorrect = updateNumberCorrect(isCorrect, numberCorrect);
      console.log(numberCorrect);
    
      /* Display answer text */
      displayQuestionResult();
      //toggleCorrect();
    });
      
  }
  
  /* Retrieve selection */
  function getSubmittedAnswer ()
    {
      console.log('`getSubmittedAnswer` ran');
  
      var radioValue = $("input[name='answer']:checked"). val();
      return radioValue;
    }
  /* Retrieve correct answer from "database" */
  function getCorrectAnswer(questionNumber)
    {
      console.log('`getCorrectAnswer` ran');
      correctAnswer = QUIZ[questionNumber-1].rightAnswer;
      return correctAnswer;
  
    }
  
    function getAnswerImage(questionNumber)
    {
          console.log('`getAnswerImage` ran');
          answerImageURL = QUIZ[questionNumber-1].answerImageURL;
          console.log(answerImageURL);
          return answerImageURL;
    }
  
    function setAnswerImage(answerImageURL)
    {
      console.log('`setAnswerImage` ran');
      document.getElementById('my-image').src= answerImageURL;
    }
  
    function getQuestionImage(questionNumber)
    {
          console.log('`getQuestionImage` ran');
          questionImageURL = QUIZ[questionNumber-1].questionImageURL;
          console.log(questionImageURL);
          return questionImageURL;
    }
  
    function setQuestionImage(questionImageURL)
    {
      console.log('`setQuestionImage` ran');
      document.getElementById('my-image').src= questionImageURL;
    }
  
  
  /* Compare selection to correct answer */
  function seeIfCorrect(submittedAnswer, correctAnswer)
    {
      console.log('`seeIfCorrect` ran');
  
      var isCorrect = (submittedAnswer == correctAnswer);
      
      if (submittedAnswer == correctAnswer)
      {
        $('#response').html(`<p>Correct!</p>`)
      }
      if (submittedAnswer != correctAnswer)
      {
        $('#response').html(`<p>Sorry! The correct answer was ${correctAnswer} </p>`)
      }
  
      $('.next-question-button').toggleClass("hide");
  
      return isCorrect;
    }
  /* Add to # correct answers counter */
  function updateNumberCorrect(isCorrect, numberCorrect)
    {
      console.log('`updateNumberCorrect` ran');
  
      if (isCorrect == true)
      {
      numberCorrect++;
      }
      return numberCorrect;
    }
  
  /* Display answer text */
  function displayQuestionResult()
    {
        console.log("'getSubmittedAnswer' ran");
        $('#response').toggleClass("hide");
    }
  
  /* I want to go to the next question*/
  function handleNextQuestion()
  {
    console.log('`handleNextQuestion` ran');
  
    $('#nextQuestion').on("click", event => {
      console.log('`NextQuestionClicked`');
  
    questionNumber ++;
    $('.next-question-button').toggleClass("hide");
  
     if (questionNumber == 5)
    {
        console.log(questionNumber);
        console.log("change to see results");
      $('#nextQuestion').text('See Results');
      
  
    }
  
    if (questionNumber <= 5)
    {
    $("#nextQuestion").text("Next Question");
    questionText = getQuestion(questionNumber);
    console.log(questionText);
    questionAnswerArray = getAnswers(questionNumber);
    console.log(questionAnswerArray);
    
    displayQuestion(questionText);
    displayAnswers(questionAnswerArray);
  
    $('#response').toggleClass("hide");
  
    var questionImageURL = getQuestionImage(questionNumber);
  
      setQuestionImage(questionImageURL);
    }
    else
    {
      displayResults();
      questionNumber = 1;
      numberCorrect=0;
    }
  
    });  
   
  }
  
    /* Retrieve question */
    function getQuestion(questionNumber)
    {
      console.log('`getQuestion` ran');
      console.log(questionNumber);
      questionText = QUIZ[questionNumber - 1].question;
      
      return questionText;
    }
    /* Retrieve possible answers */
    function getAnswers(questionNumber)
    {
      console.log('`getAnswers` ran');
      const answerArray = [];
  
      answerArray.push(QUIZ[questionNumber -1].answer1);
      answerArray.push(QUIZ[questionNumber -1].answer2);
      answerArray.push(QUIZ[questionNumber -1].answer3);
      answerArray.push(QUIZ[questionNumber -1].answer4);
  
      return answerArray;
  
    }
  
    /* Retrieve image 
    function getQuestionImage()
    {
      console.log('`getQuestionImage` ran');
    }
    */
  
    /* Display question */
    function displayQuestion(questionText)
    {
      $('.question-text').html(questionText);
      console.log('`displayQuestion` ran');
    }
  
    /* Display possible answers */
    function displayAnswers(questionAnswerArray)
    {
    console.log('`displayAnswers` ran');
  
     $('label[for=answer1]').html(`<span class="js-span">${questionAnswerArray[0]}</span></label><br>`);
  
     $('#answer1').val(questionAnswerArray[0]);
     
     /*$('#answer1').closest("span").text(questionAnswerArray[0]);*/
  
     $('label[for=answer2]').html(`<span class="js-span">${questionAnswerArray[1]}</span></label><br>`);
     $('#answer2').val(questionAnswerArray[1]);
  
     $('label[for=answer3]').html(`<span class="js-span">${questionAnswerArray[2]}</span></label><br>`);
     $('#answer3').val(questionAnswerArray[2]);
  
     $('label[for=answer4]').html(`<span class="js-span">${questionAnswerArray[3]}</span></label><br>`);
     $('#answer4').val(questionAnswerArray[3]);
    }
  
    /* Display image 
    function displayQuestionImage()
    {
      console.log('`displayQuestionImage` ran');
    }
    */
  
  /* I want to see my final results*/
  function displayResults()
  {
    console.log('`displayResults` ran');
    $('#results').toggleClass("hide");
    $('#response').toggleClass("hide");
    $('#question-page').toggleClass("hide");
  
    if (numberCorrect <=4)
    {
    $('#results').html(`<p> You got ${numberCorrect} out of 5 correct. Maybe you should go watch more friends. </p>`)
    }
  
    if (numberCorrect == 5)
    {
      $('#results').html(`<p> Nice work! You got ${numberCorrect} out of 5 correct. You really know your stuff. </p>`)
    }
  
    $('.tryAgain').toggleClass("hide");
  
  }
  
  /* I want to start the quiz over again */
  function handleStartOver()
  {
    $('#tryAgain').on("click", event =>
    {
        console.log('`handleStartOver` ran');
        $('#question-page').toggleClass("hide");
        $('#results').toggleClass("hide");
        $('.tryAgain').toggleClass("hide");
  
        questionText = getQuestion(questionNumber);
        console.log(questionText);
        questionAnswerArray = getAnswers(questionNumber);
        console.log(questionAnswerArray);
        
        displayQuestion(questionText);
        displayAnswers(questionAnswerArray);
        
        questionImageURL = getQuestionImage(questionNumber);
  
        setQuestionImage(questionImageURL);
  
  
    });
  
  }
  
  /* run code */
  function handleQuiz()
  {
    console.log('`handleQuiz` ran');
  seeIntro();
  startQuiz();
  handleAnswerSubmission();
  handleNextQuestion();
  handleStartOver();
  
  }
  
  $(handleQuiz);
  
  