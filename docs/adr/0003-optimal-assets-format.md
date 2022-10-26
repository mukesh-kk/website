# 3. Migrated assets to a optimal file format

Date: 2022-10-18

## Status

2022-10-18 accepted

## Context

While, website performance audit report [#1466](https://github.com/gitpod-io/website/issues/1466) & Lighthouse report analysis, that website should have all image assets with `.webp` extension and all video assets with `.webm`. It is also a recommendation from [web.dev](https://web.dev/efficient-animated-content/#why-you-should-replace-animated-gifs-with-video).

## Decision

We have decided to use convert & use all the assets in following manner:

| Type of file | Old file format | New file format |
| :----------: | :-------------: | :-------------: |
|    Video     |     `.gif`      |     `.webm`     |
|    Video     |     `.mp4`      |     `.webm`     |
|    Image     |     `.png`      |     `.webp`     |
|    Image     |     `.jpg`      |     `.webp`     |
|    Image     |     `.jpeg`     |     `.webp`     |

> To Convert all the old assets to the new, Progress is meausred on these PRs [[1](https://github.com/gitpod-io/website/pull/2923)], [[2](https://github.com/gitpod-io/website/pull/2921)].

## Consequences

- Higher Picture Quality with smaller size leads to higher performance & faster loading time.
- Relatively Faster build time.

## Additional Comments

### Convert Image asset to `.webp`

You Can use any online tool to convert an image, such as [convertio](https://convertio.co/png-webp/) or any other free tool, you can find it easily on internet.

**OR**

You Can use [cwebp](https://developers.google.com/speed/webp/docs/cwebp), a command line tool, directly on Gitpod, by uploading your file & following some steps:

```sh
sudo apt update
yes|sudo apt-get install webp
```

Then, change the present working directorty to your image file path & run the following command:

```sh
cwebp -q 60 "file_name.png" -o "file_name.webp'
```

> this would work for all .png/.jpg/.jpeg conversions.

### Convert Video asset to `.webm`

You Can use any online tool to convert an image, such as [convertio](https://convertio.co/mp4-webm/) or any other free tool, you can find it easily on internet.

**OR**

You Can use [ffmpeg](https://ffmpeg.org/), a command line tool, directly on Gitpod, by uploading your file & following some steps:

```sh
sudo apt update
yes|sudo apt-get install ffmpeg
```

Then, change the present working directorty to your video file path & run the following command:

#### To convert `.mp4` to `.webm`

```sh
ffmpeg -i "file_name.mp4" -c:v libvpx-vp9 -crf 30 -b:v 0 -b:a 128k -c:a libopus "file_name.webm"
```

#### To convert `.gif` to `.webm`

```sh
ffmpeg -i "file_name.gif" -c vp9 -b:v 0 -crf 10 "file_name.webm"
```
