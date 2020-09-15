# Flamingo

## About this project
This project is a cute animated flamingo character with options that control its animations. 

Flamingo is drawn in CSS only (no PNG or SVG). It is my original artwork that I first drew in Figma and then transfered to CSS. Aniamtions are created using keyframes property in CSS that are controled and changed with vanilla JavaScript.

### What effects does it have?
With two sliders you can control:

1. **Speed of the flamingo leg movement** - it uses JS to get the slider value and calculates it to get the speed change. It also defines the transition delay between left and right leg, so that it gets that walking effect. Without it, legs would move at the same time and it would look like a jump, not a walk. 

2. **Flamingo's mood** -  from red angry flamingo that stumps its legs to happy flamingo sway with moving its wing. At last slider percentages, flamingo enters in is rave mode with changing colors. 

There are three checkboxes for additional effects:

1. **Cool effect** - adds a little hat and sunglasses to flamingo.

2. **Hit the gym effect** - puts a hadband on its head and a weight in flamimgo's wing and changes the mood slider. 

3. **Saturday night fever effect** - the most complex effect. It toggles a discoball, disco floor, pants on legs and flamingo gets a new hairstyle. It also changes the backgroud color.  

Every prop in these effects is also a CSS only drawing. 

This flamingo project was done as a part of 100 days of code challenge. 


## Contributions 

I've used this youtube tutorial for creating sliders: https://youtu.be/BrpiNUf2XCk. It shows how to move slider color with changing linear gradient percentages. 

Also, the idea for changing the hue-rotate to create the discoball effect came from this CodePen https://codepen.io/Lando/pen/dxufJ. 


## Where can I see how it looks like?

Here is the flamingo link: https://brave-tesla-9786e8.netlify.app  