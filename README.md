# Notifier

This app starts a simple HTTP server that allows your colleagues to ping you.
A notification will appear and your computer will say "Hey!".

People with noise cancelling headphones will understand.

Only compatible with Mac OS X.

### Usage

Start it:

	$ npm start

(Probably you want to use `forever`).

Then give the link to your colleague:

	$ curl http://your-ip-or-address:8085/colleague-name

### Notes

Don't worry, a simple throttler is implemented. ;)
