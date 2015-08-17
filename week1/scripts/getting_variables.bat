@echo off

REM @echo off just makes it so we only see what we actually WANT to see on our screen, otherwise every single things we do is written to our console, making it hard to see the things we are trying to see...

REM this allows us to reference variable names using !name! syntax, which is useful
setlocal ENABLEDELAYEDEXPANSION&pushd %~dp0

REM I grabbed this line from the internet, you don't need to understand the syntax to use it, and it works great for grabbing your current directory name

for %%* in (.) do (
	set directory=%%~nx*
	echo !directory!
  pause
)