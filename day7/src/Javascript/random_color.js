function getRandomColor() {
    const colorpastel = ["#f7cdcd", "#f7d7cd", "#f7e2cd", "#f7eccd", "#f7f7cd", "#ecf7cd", "#f7f0cd", "#f3f7cd",
        "#e9f7cd", "#def7cd", "#d4f7cd", "#cdf7d0", "#e2f7cd", "#d7f7cd", "#cdf7cd", "#cdf7d8", "#cdf7e2", "#cdf7ec",
        "#cdf7cf", "#cdf7d9", "#cdf7e4", "#cdf7ee", "#cdf5f7", "#cdebf7", "#cdf7e0", "#cdf7ea", "#cdf7f5", "#cdeff7",
        "#cde4f7", "#cddaf7", "#cdf7ef", "#cdf4f7", "#cdeaf7", "#cde0f7", "#cdd5f7", "#d0cdf7", "#cdf2f7", "#cde7f7",
        "#cdddf7", "#cdd2f7", "#d2cdf7", "#dccdf7", "#cde0f7", "#cdd5f7", "#cfcdf7", "#d9cdf7", "#e4cdf7", "#eecdf7",
        "#cdcff7", "#d5cdf7", "#e0cdf7", "#ebcdf7", "#f5cdf7", "#f7cdee", "#dccdf7", "#e6cdf7", "#f1cdf7", "#f7cdf3",
        "#f7cde8", "#f7cddd", "#eecdf7", "#f7cdf6", "#f7cdeb", "#f7cde0", "#f7cdd6", "#f7cecd", "#f7cdf7", "#f7cdec",
        "#f7cde2", "#f7cdd7", "#f7cdcd", "#f7d8cd", "#f7cdef", "#f7cde4", "#f7cdda", "#f7cdcf", "#f7d5cd", "#f7dfcd",
        "#f7cde5", "#f7cdda", "#f7cdd0", "#f7d4cd", "#f7dfcd", "#f7eacd", "#f7cdda", "#f7cdcf", "#f7d5cd", "#f7e0cd",
        "#f7eacd", "#f7f4cd", "#f7cdd1", "#f7d4cd", "#f7decd", "#f7e9cd", "#f7f3cd", "#f0f7cd"
    ]
    // const letters = "0123456789ABCDEF";
    // let color = "#";
    // for (let i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    // }
    return colorpastel[Math.floor(Math.random() * colorpastel.length)];
}

export default getRandomColor