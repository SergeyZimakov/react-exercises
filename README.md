# React.js: exercises
Here are you exercises. Please read the general instructions before you start.

## General instructions:
- All the exercises deal with "password" elements.
- Each element will have a single property: 'secret'. It will be composed of digits
- Try NOT to use the "state" object if you can.
- If you decide to use the state object, use the minimum number of properties required
- The solution is provided in the "components/solutions" folder. Please create your own folder under "components" and use the components **you** created in the "App.js" file.

## Exercise 1:
- 'secret' range: [0..9]
- In the "render" method, generate a random number in the same range ([0..9]), and then show a text "Secret= ..., and Guess=..."
- The text will be with a green background if the guess equals the secret
- The text will be with a red background if the guess doesn't equal the secret

## Exercise 2:
- 'secret' range: [0..9]
- The component will include a single 'select' element with the digits in the same range.
- When the value of the 'select' changes, the components checks the guess and shows an alert with the relevant message (success / failure)

## Exercise 3:
- 'secret' range: not limited
- The component will have an 'input' for filling the guess, and a button
- **Only** when the button is clicked the guess is checked and an alert is displayed with the relevant message (success / failure)

## Exercise 4:
- 'secret' will be composed of N digits (N >= 1)
- The component will include N 'select' elements, and a button
- The composition of the N elements will be the user guess
- **Only** when the button is clicked the guess (the combined digits) is checked against the 'secret' and an alert is displayed with the relevant message (success / failure)
<br />

<b>`Good luck !`</b>
