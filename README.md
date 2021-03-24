# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **William Chung**

Time spent: **5** hours spent in total

Link to project: Click [here](https://glitch.com/edit/#!/solstice-level-dust)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] User can see how many strikes remain before they lose

## Video Walkthrough

Here's a walkthrough of implemented user stories:

Winning
![](https://github.com/will-chung/simon-game/blob/main/winning.gif)

Losing
![](https://github.com/will-chung/simon-game/blob/main/losing.gif)

Timer 
![](https://github.com/will-chung/simon-game/blob/main/timer.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   
   List of websites I used:
   - [https://www.w3schools.com/](https://www.w3schools.com/)
   - [https://www.rapidtables.com/web/css/css-color.html#purple](https://www.rapidtables.com/web/css/css-color.html#purple)
   - [https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/random)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   A challenge I encountered in creating this submission was adapting to unfamiliar programming languages, a challenge which I overcame by using my unfamiliarity as a guide for what I needed to learn. Although I had been exposed to HTML, JavaScript, and CSS before, this was the first time I had used all three collectively towards creating a functioning web application. There were many things I did not know about the languages as I completed the project, which became more apparent with each problem that arose. Each language presented their own difficulties. 
   
   HTML was somewhat similar to XML, which I have used for Android programming, but was nonetheless foreign to me. Simply knowing which tags exist and when to use them was a challenge in and of itself. For example, in trying to add a label to the game to display the timer, I was unsure of which tag would do the job. I had to refer to a guide about creating labels by *w3schools*, which led me to use the `span` element. Similar roadblocks existed for the other languages, as well. 
   
   JavaScript is similar enough to other programming languages I am more familiar with, such as Java and C++, but it's language-specific syntax still took some getting used to. One major change was that JavaScript,  unlike Java and C++, is a dynamically-typed language and does not require the programmer to specify data types. Declaring a variable's data type had become almost a habit for me. Another obstacle was being aware of relevant built-in functions. Without the hints given in the tutorial (e.g., to use `setInterval` and `clearInterval` for the timer), it would have been more difficult to figure out the applicable functions.
      
   Finally, CSS was wholly unfamiliar territory for me besides the minimal exposure I had to it before this project. Again, simply knowing which properties were available to use and what their possible values were proved to be difficult. Thankfully, the tutorial helped greatly in this area. 
    
   Although I did not know much about these languages when I started the project, on finishing the project I had learned a great deal. With each problem I faced, researching the solution provided a learning opportunity. I was able to both solve the problem and gain some knowledge while doing so. In this way I overcame my unfamiliarity by viewing it as a lesson which I could learn from.

   Overall, I found it to be both challenging and interesting having to adapt to HTML, JavaScript, and CSS. Completing this project using them and learning from the problems I faced helped me to deepen my understanding of not only the languages but also of web development as a whole.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   
   One question I have about web development after completing my submission is, what are the limits of web development? Can a web application do everything a non-web-based application can? I get the sense it can, but I am curious about whether there are any downsides to using a web application specifically that otherwise would not pose a problem? If it turns out that web applications are entirely equivalent to other types of applications, then can applications be platform-independent (able to work across all platforms)?
   
   Another question I have is, how common is it for applications to be translated to and from a web application? For example, for a mobile application to be translated to a web application or vice versa. Nowadays, web applications are one of the most popular types of software, which is partially explained by how truly ubiquitous the Internet is. It is not an overstatement to say that nearly every business or organization either has a website or is trying to make a website. With such a high demand for web applications, I would expect there also to be a high demand for translating existing applications into web applications or existing web applications into other types of applications.
   
   A final question I have is, how do the different types of software development interconnect? It would be redundant for the same app to be developed separately so that it may be used on different platforms (e.g., web, mobile, desktop, etc.), though that seems to me to be the case currently. A web application cannot work on a computer as a desktop application without extensive modifications. Even though the end-product of the two applications might look and function the same, they require essentially independent development when it comes to implementation. I am not sure if different types of software development can be more interconnected than they currently are, but that is something I am eager to figure out.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   If I had a few more hours to work on this project, I would firstly implement several additional features. I would implement difficulty levels which the user could select, an option for the game to proceed for however long the user wants (the user can choose the length of the pattern, which could be infinite), and also a scoreboard which displays the length of the longest pattern the user has memorized. 
   
   Then I would analyze the code to see if it could be improved. One thing I have learned to be mindful of through my computer science classes is the time and space complexity of any program. Optimization in these areas would make the program overall more efficient and scalable. Of course, for a simple game like this which did not involve much data storage or manipulation, such considerations might be extraneous, but it is nonetheless interesting to me to analyze the code with such an "efficiency lens" in place.
     
   Finally, I would spend time refining the user interface for the webpage. I believe form follows function, and that design should be primarily driven by the function of whatever is being designed (in this case a webpage). However, there are still an endless number of forms that could follow from a certain function and thus differences in design arise. For example, a webpage that allows the user to play the exact same game we have made in this project could have an entirely different design (different colors, fonts, layout, sounds, etc.). Perhaps there is not a single "best" design, but improving the design by making it more user-friendly, intuitive, or even aesthetically-pleasing all contributes to improving the application.

   All in all, if I had more time to spend on this project, I would implement several additional features, try to optimize the code wherever possible, and try to refine the design wherever possible. 


## License

    Copyright William Chung

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
