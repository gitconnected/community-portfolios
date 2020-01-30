# Community Portfolios
Portfolios from the [gitconnected.com](https://gitconnected.com) community.

Build your portfolio using the [Portfolio API](https://gitconnected.com/portfolio-api) and also generate your résumé with no additional work. See an [example résumé](https://gitconnected.com/richard-hendricks-demo/resume).

This is also a great excercise on submitting a PR if you're new to open source or Git!

## Submitting Your Portfolio
You will need to submit a PR to this repo with the content below. If you need directions on submitting a PR use [this guide](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

1. Take a screenshot of your portfolio in widescreen format - preferably ~16x9 aspect ratio.
2. Add your screen shot to the `images` folder and make the file name your username.
3. Add your details as an object to the `items` key of the `portfolios.json` file. If your portfolio is not on GitHub, you can leave that item out.
```js
{
  "version": "x.x.x",
  "items": [
    // ... other items
    {
      "username": "GitHub / gitconnected {username}",
      "image": "{username}.png",
      "website": "https://portfolio.com",
      "github": "https://github.com/{username}/{portfolio repo}"
    }
  ]
}
```

## Tests
TODO
