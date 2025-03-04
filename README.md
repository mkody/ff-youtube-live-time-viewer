# Time Viewer for YouTube Live (forked for Firefox)

> Firefox Extension for Viewing Time on YouTube Live.

## Features

- Display video publishing time.
- Display time on seek bar and chat.

## Screenshots

![screenshot](.github/img/screenshot1.png)
![screenshot](.github/img/screenshot2.png)

## Installation

From the Firefox Add-ons site: https://addons.mozilla.org/en-US/firefox/addon/time-viewer-for-youtube-live/

Manually:
- Build a copy of this extension or download the latest `.zip` [from the releases](https://github.com/mkody/ff-youtube-live-time-viewer/releases/latest)
- Open `about:debugging` and switch to "This Firefox"
- Click on the `Load Temporary Add-on` and select the zip file

## Development

```bash
# install dependencies
yarn

# watch files changed and reload extension
yarn dev
```

## Build

```bash
# build the extension
yarn build

# package for distribution
yarn package
```
