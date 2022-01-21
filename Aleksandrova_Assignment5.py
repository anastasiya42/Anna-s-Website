#Anastasiya Aleksandrova
#9/8/2021

import random

#Generate a random number between 1 and 100 using the random module
x = random.randint(1, 100)

#Ask the user to guess the number
y = input("Guess the number: ")

#Keep track of how many guesses the user has taken
guesses = int(0)

#Keep the game going until the user types exit then break at this point in the program
#Tell the user whether they guessed to low, too high or exactly right
while y.isdigit():
    if int(y) == x :
       print("You guessed correctly!")
       guesses = guesses + 1
       y = input("Guess the number between 1 and 100: ")
    elif int(y) > x :
        print("You guessed too high!")
        guesses = guesses + 1
        y = input("Enter another number or exit: ")
    elif int(y) < x:
        print("You guessed too low!")
        guesses = guesses + 1
        y = input("Enter another number or exit: ")
    else :
        break

#When the game ends print out the number of guesses.
print("Good game! You made " + str(guesses) + " guesses.")



