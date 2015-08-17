@echo off

REM @echo off just makes it so we only see what we actually WANT to see on our screen, otherwise every single things we do is written to our console, making it hard to see the things we are trying to see...


REM this allows us to reference variable names using !name! syntax, which is useful
setlocal ENABLEDELAYEDEXPANSION&pushd %~dp0

set studentname=add your name

echo !studentname!

pause

cls