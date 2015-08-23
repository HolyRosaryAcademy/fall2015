### Set up a Github account

This is free, and necessary for this class. We'll do this in class, as I can invite each student to join our repo based on their email address.

### Setting up Git on your Machine

There are 2 basic ways to use Git, which is a version control system and online repository that most programmers use these days. You can download the Github for Windows client and use that, or install the command line tool Git Bash. We'll go ahead and install the Windows program as it will allow you access to both tools.

After you install this, you will need to clone the HolyRosaryAcademy class repo by opening Git Bash in your Documents folder, and cloning or downloading the repo to your local machine by putting the following command into your console:

    git clone https://github.com/HolyRosaryAcademy/fall2016.git

Git Bash accepts pasted info if you right click up in the top left hand corner, just use the PASTE command you see there.

### Add a folder with your name to the repo

This part is easy, and once you've synced your folder, it won't matter what development machine you choose the following week. You can also access your files from home, as the repo is public and accessible to anyone, anywhere.

Just create a folder in the root of the /fall2016 folder, with your first name followed by an underscore, then your last name. For example,

 /john_doe

Then you can either use the Windows app to sync and publish your changes, or (better..), you can use the command line Git Bash and enter:

    git add --all

    git commit -m 'write a message here about your commit'

    git push origin master

Then you'll have to use your username and password for Github.




