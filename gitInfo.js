/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = "Gir is a version control system that helps with project management. from big to small projects. You can also work with team members to manage workflow, changes to project, etc."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = "Github is the platform that allows you to access your projects via cloud. Once projects uploaded into the cloud you can download into your system locally, make changes that wouldn't affect existing project unless you tried to re-upload(push)."

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

const init ={
    description: "creates a new git repo",
    gitInit: "git init",
    gitAdd: "git add .",
    gitCommit: `git commit -m"comment"`,
    gitPush: `git push -u origin main`

}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

const clone = {
    description:"makes a copy of the repo and saves it locally to your device",
    copyRepo: "in github you need to go to repo andcopy HTTPS url",
    inTerminal: "git clone (url) -> should say done once completed"
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
const status = {
    description:"tells you the state of the working directory and what changes have been staged. ie; git files have been modified.",
    inTerminal: "git status"
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

const add = {
    description:"adds the changes you made in the working directory.",
    inTerminal: "git add ."
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {
    description:"takes a snapshot of the changes you made after you've added them.",
    inTerminal: "git commit -m(write a description no parenthesis though)"
}


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

const push = {
    description:"uploads all the changes you made to the repo, which can then be accessed/seen by others and cloned on other devices",
    inTerminal:"when you first push you will have to use git push -u origin main but after you've done that you could just use git push for the remainder of your work"
}