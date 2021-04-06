/**
 * Video URL: https://www.youtube.com/watch?v=<insert-youtube-video-id-here>
 * Thumbnail: http://img.youtube.com/vi/<insert-youtube-video-id-here>/hqdefault.jpg
 * Creator Channel URL: https://www.youtube.com/channel/<creator-id>
 */

const videoData = {
  videoList: [
    {
      id: "3UF0ymVdYLA",
      name:
        "Stock Market For Beginners | How can Beginners Start Investing in Share Market | Hindi",
      categoryId: "category1",
      creator: {
        id: "UCwAdQUuPT6laN-AQR17fe1g",
        name: "Pranjal Kamra",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwngY1SgK5Ib83DYx8yr2dI2s7Ke7dgkYtHdo8V6jig=s48-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "l7ErNZmKzxY",
      name:
        "Best Mutual Funds to Invest in 2021 | Top Mutual Funds for SIP in India 2021 | म्यूचूअल फ़ंड",
      categoryId: "category2",
      creator: {
        id: "UCwAdQUuPT6laN-AQR17fe1g",
        name: "Pranjal Kamra",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwngY1SgK5Ib83DYx8yr2dI2s7Ke7dgkYtHdo8V6jig=s48-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "3PGL5pkqwVM",
      name: "Mutual Funds Investment Reality for Beginners in India",
      categoryId: "category2",
      creator: {
        id: "UCsNxHPbaCWL1tKw2hxGQD6g",
        name: "Asset Yogi",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwngN1Er8noIZTbtHNdK7O85bkoo1mawOj2AH3R1X=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "U1w80AsDwSE",
      name:
        "Mutual Funds Basics For Beginners - What are Mutual Funds, Their Risks & Returns?",
      categoryId: "category2",
      creator: {
        id: "UCsNxHPbaCWL1tKw2hxGQD6g",
        name: "Asset Yogi",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwngN1Er8noIZTbtHNdK7O85bkoo1mawOj2AH3R1X=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "5ejgM_Hs1oY",
      name: "NAV (Net Asset Value) - Mutual Funds & ULIPs (Hindi)",
      categoryId: "category2",
      creator: {
        id: "UCsNxHPbaCWL1tKw2hxGQD6g",
        name: "Asset Yogi",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwngN1Er8noIZTbtHNdK7O85bkoo1mawOj2AH3R1X=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "1KMMqlSyiDE",
      name:
        "Large Cap, Mid Cap & Small Cap Stocks & Mutual Funds - As per SEBI",
      categoryId: "category2",
      creator: {
        id: "UCsNxHPbaCWL1tKw2hxGQD6g",
        name: "Asset Yogi",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwngN1Er8noIZTbtHNdK7O85bkoo1mawOj2AH3R1X=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "bLOaHUBnueM",
      name: "ELSS - Tax Saving Mutual Funds (Hindi)",
      categoryId: "category2",
      creator: {
        id: "UCsNxHPbaCWL1tKw2hxGQD6g",
        name: "Asset Yogi",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwngN1Er8noIZTbtHNdK7O85bkoo1mawOj2AH3R1X=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "PXThRO04UwQ",
      name: "Debt Mutual Funds or Equity Mutual Funds in 2020? - Hindi",
      categoryId: "category2",
      creator: {
        id: "UCsNxHPbaCWL1tKw2hxGQD6g",
        name: "Asset Yogi",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwngN1Er8noIZTbtHNdK7O85bkoo1mawOj2AH3R1X=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "FLV2Jgy2Src",
      name: "Mutual Funds SIP Investment vs Lump Sum for Beginners",
      categoryId: "category2",
      creator: {
        id: "UCsNxHPbaCWL1tKw2hxGQD6g",
        name: "Asset Yogi",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwngN1Er8noIZTbtHNdK7O85bkoo1mawOj2AH3R1X=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "Xn7KWR9EOGQ",
      name:
        "Basics of Stock Market For Beginners Lecture 1 By CA Rachana Phadke Ranade",
      categoryId: "category1",
      creator: {
        id: "UCe3qdG0A_gr-sEdat5y2twQ",
        name: "CA Rachana Phadke Ranade",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwnhyQxJ5qyZrz_BA3G3UnYz7H5GCX5PrkGtcyCM6RQ=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "bLl_VRQ7pBs",
      name:
        "Basics of Stock Market For Beginners Lecture 2 By CA Rachana Phadke Ranade",
      categoryId: "category1",
      creator: {
        id: "UCe3qdG0A_gr-sEdat5y2twQ",
        name: "CA Rachana Phadke Ranade",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwnhyQxJ5qyZrz_BA3G3UnYz7H5GCX5PrkGtcyCM6RQ=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "hBKqk5oYexw",
      name:
        "Basics Of Stock Market for Beginners Lecture 3 by CA Rachana Ranade",
      categoryId: "category1",
      creator: {
        id: "UCe3qdG0A_gr-sEdat5y2twQ",
        name: "CA Rachana Phadke Ranade",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwnhyQxJ5qyZrz_BA3G3UnYz7H5GCX5PrkGtcyCM6RQ=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "5hnyb78_sMc",
      name:
        "What Is Futures And Options Trading? F&O Explained By CA Rachana Ranade",
      categoryId: "category1",
      creator: {
        id: "UCe3qdG0A_gr-sEdat5y2twQ",
        name: "CA Rachana Phadke Ranade",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwnhyQxJ5qyZrz_BA3G3UnYz7H5GCX5PrkGtcyCM6RQ=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "LLdKcFpHgM8",
      name:
        "Financial Planning for Beginners | Personal Financial Planning Course P1 By CA Rachana Phadke Ranade",
      categoryId: "category3",
      creator: {
        id: "UCe3qdG0A_gr-sEdat5y2twQ",
        name: "CA Rachana Phadke Ranade",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwnhyQxJ5qyZrz_BA3G3UnYz7H5GCX5PrkGtcyCM6RQ=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "1cdHfk78a5A",
      name: "Everything about PPF - Public Provident Fund | Financial Advice",
      categoryId: "category4",
      creator: {
        id: "UCVOTBwF0vnSxMRIbfSE_K_g",
        name: "Labour Law Advisor",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwniKLv8OUIav1NVgVBwJRec7HY55CWhONnFtwHSJDg=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "H_8ehrL4J24",
      name:
        "➡️PPF (Public Provident Fund) Investment | PPF Account Benefit | Safe Investment Options |",
      categoryId: "category4",
      creator: {
        id: "UCVOTBwF0vnSxMRIbfSE_K_g",
        name: "Labour Law Advisor",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwniKLv8OUIav1NVgVBwJRec7HY55CWhONnFtwHSJDg=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "3e4zvc2uPQA",
      name:
        "PPF Account से आपको लगेगी भारी चपत | Financial Advice to save money",
      categoryId: "category4",
      creator: {
        id: "UCVOTBwF0vnSxMRIbfSE_K_g",
        name: "Labour Law Advisor",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwniKLv8OUIav1NVgVBwJRec7HY55CWhONnFtwHSJDg=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "HDYTywPW2yc",
      name:
        "NPS vs PPF | Which is a BETTER retirement plan? LLA NPS Ep#2 Financial Advice",
      categoryId: "category4",
      creator: {
        id: "UCVOTBwF0vnSxMRIbfSE_K_g",
        name: "Labour Law Advisor",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwniKLv8OUIav1NVgVBwJRec7HY55CWhONnFtwHSJDg=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "kyEo7KSAvZQ",
      name: "Avoid this MISTAKE in PPF, get more interest",
      categoryId: "category4",
      creator: {
        id: "UCVOTBwF0vnSxMRIbfSE_K_g",
        name: "Labour Law Advisor",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwniKLv8OUIav1NVgVBwJRec7HY55CWhONnFtwHSJDg=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "WJkEB43QJNk",
      name:
        "What is PPF Account | Public Provident Fund explained in Hindi | PPF withdrawal and investment rules",
      categoryId: "category4",
      creator: {
        id: "UCwAdQUuPT6laN-AQR17fe1g",
        name: "Pranjal Kamra",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwngY1SgK5Ib83DYx8yr2dI2s7Ke7dgkYtHdo8V6jig=s48-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "yK0iKkh_kXs",
      name: "NPS vs PPF vs EPF vs Mutual Fund vs ELSS",
      categoryId: "category4",
      creator: {
        id: "UCsNxHPbaCWL1tKw2hxGQD6g",
        name: "Asset Yogi",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwngN1Er8noIZTbtHNdK7O85bkoo1mawOj2AH3R1X=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "002F3UXySiM",
      name:
        "Public Provident Fund (PPF) Account – Benefits, Calculator, Interest Rate, Rules",
      categoryId: "category4",
      creator: {
        id: "UCsNxHPbaCWL1tKw2hxGQD6g",
        name: "Asset Yogi",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwngN1Er8noIZTbtHNdK7O85bkoo1mawOj2AH3R1X=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "jNwREK6WnzI",
      name: "Power of Compounding",
      categoryId: "category5",
      creator: {
        id: "UCsNxHPbaCWL1tKw2hxGQD6g",
        name: "Asset Yogi",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwngN1Er8noIZTbtHNdK7O85bkoo1mawOj2AH3R1X=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "C49nSjzg1iw",
      name: "50-30-20 Rule of Money - Easy Financial Planning for Beginners",
      categoryId: "category3",
      creator: {
        id: "UCsNxHPbaCWL1tKw2hxGQD6g",
        name: "Asset Yogi",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwngN1Er8noIZTbtHNdK7O85bkoo1mawOj2AH3R1X=s88-c-k-c0x00ffffff-no-rj",
      },
    },
    {
      id: "yNaN5kYTNLY",
      name:
        "The best ways to Invest in your 20s | Investing for Beginners | Ankur Warikoo Hindi Video",
      categoryId: "category3",
      creator: {
        id: "UCRzYN32xtBf3Yxsx5BvJWJw",
        name: "warikoo",
        imgSrc:
          "https://yt3.ggpht.com/ytc/AAUvwni0zYJJ7E-m-2tskhvqp9bnUjIP0dnU1dcn9c8lNQ=s88-c-k-c0x00ffffff-no-rj",
      },
    },
  ],
};
export default videoData;
