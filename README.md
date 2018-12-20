# Advent of Code 2018
[![CircleCI](https://circleci.com/gh/mpaarating/aoc2018/tree/master.svg?style=svg)](https://circleci.com/gh/mpaarating/aoc2018/tree/master)

My solutions to the Advent of Code 2018 problems.

This repository organizes the solutions by day. I have tried to create and retain branches that correspond to the specific problems and include the problem in the PR for that day.
The solutions have tests along side of them to provide an easy to run way of verifying results.

### Installation and Running
1. Install [NodeJS](https://nodejs.org). The recommended version for this project is `10.11.0`.
    * After installing, if you run `which node` in your [terminal](https://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything), it should print something like `/usr/local/bin/node`. If it prints nothing, there may be an issue with your Node install. First restart your terminal. If that still doesn't work, find out where on your system Node installed to, and then check your `$PATH` variable (`echo $PATH`) to see whether the Node install location is listed.
2. Install [Git](https://git-scm.org).
   * As above, `which git` should print something like `/usr/local/bin/git`. If it doesn't, you can follow the same troubleshooting steps as for NodeJS.
3. Open your terminal and run the following commands:
	1. `git clone https://github.com/mpaarating/aoc2018`
		* If this fails with an error message, [have a look at this page](https://help.github.com/articles/https-cloning-errors/).
	2. `cd aoc2018`
	3. `npm install`
4. Run `npm test` to run the test suite. The project uses the Jest testing library.

Please let me know if there are issues when running the project.

