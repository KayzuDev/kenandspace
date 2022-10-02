let score = 0;
let userAnswers = [];
const correctAnswers = ["Roscosmos", "The 21st century", "Saxophone", "CCDev", "2002"];



function checkAnswers()
{
    let wrongAnswers = document.getElementsByClassName("wrong");
    let rightAnswers = document.getElementsByClassName("correct");
    for (let i = 0; i < correctAnswers.length; i++)
    {
        if (userAnswers.length != correctAnswers.length)
        {
            alert("Please answer to every question.");
            return;
        }
        
        for (let x = 0; x < userAnswers.length; x++)
        {
            if (userAnswers[x] == correctAnswers[i])
            {
                score++;
            }
        }
        
        for (let j = 0; j < wrongAnswers.length; j++)
        {
            if (wrongAnswers[j].value == userAnswers[i])
            {
                wrongAnswers[j].style.backgroundColor = 'red';
            }
        }
        
        rightAnswers[i].style.backgroundColor = '#1cff00';
        
        let buttons = document.getElementsByClassName("quiz-btn");
        
        for (let k = 0; k < buttons.length; k++)
        {
            buttons[k].disabled = true;
        }
    }
    
    printScore();
}

function printScore()
{
    let scoreText = document.getElementById('score');
    
    if(score == 5)
    {
        scoreText.innerHTML = `Score: ${score}/5. Excellent! :D`;
        scoreText.style.color = "#248500";
    }
    else if (score == 4 || score == 3)
    {
        scoreText.innerHTML = `Score: ${score}/5. Pretty good. :)`;
        scoreText.style.color = "#4aff05";
    }
    else if (score == 1 || score == 2)
    {
        scoreText.innerHTML = `Score: ${score}/5. C'mon ! You will do better next time. :|`;
        scoreText.style.color = "#ffda00";
    }
    else
    {
        scoreText.innerHTML = `Score: ${score}/5. Are you sure you looked at my website? :(`;
        scoreText.style.color = "#e20000";
    }
    
    score = 0;
}

function selectAnswer(event)
{
    let selectedButton = event.target;
    
    // Gets the parent of the answers
    const parent = selectedButton.parentElement.parentElement;
    const children = parent.children;
    
    let selectedAnswers = document.getElementsByClassName('selected');
    
    for (let x = 0; x < selectedAnswers.length; x++)
    {
        if (selectedButton == selectedAnswers[x])
        {
            return;
        }
    }
    
    for (let i = 0; i < children.length; i++)
    {
        if (children[i].children[0] != null && document.getElementsByClassName('selected').length > 0)
        {
            for (let j = 0; j < selectedAnswers.length; j++)
            {
                if (children[i].children[0].value == document.getElementsByClassName('selected')[j].value)
                {
                    children[i].children[0].classList.remove('selected');
                
                    for (let k = 0; k < userAnswers.length; k++)
                    { 
                        if (userAnswers[k] == children[i].children[0].value)
                        {
                            userAnswers.splice(k, 1);
                        }
                    }
                }               
            }

        }
    }
    selectedButton.classList.add('selected');
    userAnswers.push(selectedButton.value);
}

function reset()
{
    window.location.reload();
}