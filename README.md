[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ihfjUrzT)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11529865&assignment_repo_type=AssignmentRepo)

# Axecraft
## A Display Typeface by Rita Close
## MDDN 242 2023 Assignment 2 | Trimester 2 2023

![Axecraft Typeface Preview Image](https://github.com/23-2-DSDN242/mddn242-parametric-design-RitaClose/blob/main/preview.jpg)

### Typeface Description
Each of my letters is composed from 3 black circles which cut out the silver axe shape and thin pink and silver rectangles. The large silver circle is fixed but everything in it moves either independently or in relation to other variables.

### Parameters per letter:
#### Circle Parameters:
  - **cirRot** : The non-linear rotation of the two large black circles.
  - **cirRad** : The Radius of the white inner circle.
  - **cirStroke** : The stroke of the white inner circle.
  - **coverCir** : Radius of 3rd outer black circle.
  - **ringColor** : The Colour of the inside ring to show whether the outer blade is a part of the letter or not.
#### Rectangle 1 Parameters:
  - **rect1X** : X Position of rectangle 1. Also changes the size of the second black outer circle.
  - **rectWidth** : Changes the width of rectangle 1.
#### Rectangle 2 Parameters:
  - **rect1Angle** : The Angle of rect 1 and 2 which rotate in opposite directions. The pink rectangle rotates with rectangle 2.
  - **rect2X** : Changes X Position of rectangle 2 and the pink rectangle.
  - **rectGap** : Alters the (X)space between rectangle 2 and the pink rectangle.
#### Rectangle 3 Parameters:
  - **rectLen** : Length of rectangle 3, negative value makes one rect, positive value makes two.
  - **rect3Angle** : Changes rotation of rectangle 3, if it's split into two they will rotate in opposite directions.
  - **rect3Y** : Changes both Y Positions of rect 3.

#### Interpolation Parameters:
  - **arcLen** : Appears in relation to the circle Rotation parameter. The larger the distance the circle has to turn, the bigger the 'motion' arcs. Also changes the width of the inner blade ring during interpolation.

### Design Process

(300-600 words)

 I wasn't exactly sure what I wanted to do for my typeface in the beginning except I wanted to try and keep the variables to a minimum and use simple shapes to convey my idea.
 I started off with the idea as shown in my sketch, but I thought this concept would be too simple and I thought it would be interesting to control multiple elements with a single variable. Though this was a fun idea, it could be difficult at times because the restrictions I had put in place made it hard to make certain letters.
 I decided to use roman numerals instead of traditional numbers due to the nature of my typeface, the only curves I had to work with were those of the outer circle - which is static - and traditional numbers are largely shapes made from curves. I also wouldn't have been able to make the numbers from straight lines because I only had 5 of them, and only 3 could be moved independently, and even then, only on a single axis each. Roman numerals on the other hand are composed largely from single straight lines and I fortunately had enough to pull this off. Having done this, another complication was making the i and v look different from 1 and 5. Though they ended up looking fairly similar, I think the context of their use will help to differentiate between them – much like the other letters, they are more legible when used in conjunction with others.
