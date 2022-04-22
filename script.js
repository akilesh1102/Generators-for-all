const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const linkedinBtn = document.getElementById('linkedin')
const whatsappBtn = document.getElementById('whatsapp')
const newQuoteBtn = document.getElementById('new-quote')

// --------------------------------------------------------------------------

const jokeContainer = document.getElementById('joke-container')
const jokeText = document.getElementById('joke')
const answer = document.getElementById('answer')
const twitterBtn1 = document.getElementById('twitter1')
const linkedinBtn1 = document.getElementById('linkedin1')
const whatsappBtn1 = document.getElementById('whatsapp1')
const newjokeBtn = document.getElementById('newjoke')

// ---------------------------------------------------------------------------

const newsContainer = document.getElementById('news-container')
const newsText = document.getElementById('news')
const twitterBtn2 = document.getElementById('twitter2')
const whatsappBtn2 = document.getElementById('whatsapp2')
const newnewsBtn = document.getElementById('newnews')
const gotobtn = document.getElementById('link-button')

// ---------------------------------------------------------------------------

const loader = document.getElementById('loader')
const loader1 = document.getElementById('loader1')
const loader2 = document.getElementById('loader2')

//----------------------------------------------------------------------------

function loading() {
    loader.hidden = false
    quoteContainer.hidden = true
}
function complete() {
    quoteContainer.hidden = false
    loader.hidden = true
}

function loading1() {
    loader1.hidden = false
    jokeContainer.hidden = true
}
function complete1() {
    jokeContainer.hidden = false
    loader1.hidden = true
}


function loading2() {
    loader2.hidden = false
    newsContainer.hidden = true
}
function complete2() {
    newsContainer.hidden = false
    loader2.hidden = true
}


//--------------------------------------------------------------------------------------

let apiQuotes = []
let apiJokes = []
let apiNews = []


function newQuote() {

    loading()

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    if (!quote.author) {
        authorText.textContent = ''
    } else {
        authorText.textContent = quote.author
    }
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text

    complete()

}

function newJoke() {

    loading1()

    const joke = apiJokes[0]
    jokeText.textContent = joke.question
    answer.textContent = joke.punchline

    complete1()
}

function newNews() {

    loading2()

    const news = apiNews[Math.floor(Math.random() * apiNews.length)]
    newsText.textContent = news.title
    url = news.url
    complete2()
}

gotobtn.addEventListener('click', event => {
    window.open(url,'_blank')
    
})


//--------------------------------------------------------------------------------------

async function getQuotes() {

    loading()

    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {
        console.log("OOPS!! Error Occured")
    }
}

async function getjokes() {

    loading1()

    const apiUrl1 = 'https://backend-omega-seven.vercel.app/api/getjoke'
    try {
        const response1 = await fetch(apiUrl1)
        apiJokes = await response1.json()
        newJoke()
    } catch (error) {
        console.log("OOPS!! Error occured")
    }
}



async function getNews() {
    loading2()
    const apiurl2 = "https://gnews.io/api/v4/top-headlines?&topic=technology&lang=en&token=3f82c1a2127a818ce4bd67259235bc96"
    try {
        const response = await fetch(apiurl2)
        r = await response.json()
        apiNews = r.articles
        newNews()
    } catch (error) {
        console.log("OOPS !! Error Occured")
    }
}

//--------------------------------------------------------------------------------------------------------------------------


function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText} `
    window.open(twitterUrl, '_blank');
}
function postQuote() {
    const inUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${quoteText.innerText} - ${authorText.innerText}`
    window.open(inUrl, '_blank')
}
function shareQuote() {
    const waurl = `https://wa.me/?text=${quoteText.innerText} - ${authorText.innerText}`
    window.open(waurl, '_blank')
}

function tweetjoke() {
    const twitterUrl1 = `https://twitter.com/intent/tweet?text=${jokeText.innerText} Answer : ${answer.innerText}`
    window.open(twitterUrl1, '_blank');
}
function postjoke() {
    const inUrl1 = `https://www.linkedin.com/feed/?shareActive=true&text=${answer.innerText} Answer : ${jokeText.innerText}`
    window.open(inUrl1, '_blank')
}
function sharejoke() {
    const waurl1 = `https://wa.me/?text=${jokeText.innerText} Answer : ${answer.innerText}`
    window.open(waurl1, '_blank')
}

function tweetnews() {
    const twitterUrl2 = `https://twitter.com/intent/tweet?text=${newsText.innerText}`
    window.open(twitterUrl2, '_blank');
}

function sharenews() {
    const waurl2 = `https://wa.me/?text=${newsText.innerText}`
    window.open(waurl2, '_blank')
}


//--------------------------------------------------------------------------------------------------------------------------

newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)
linkedinBtn.addEventListener('click', postQuote)
whatsappBtn.addEventListener('click', shareQuote)

newjokeBtn.addEventListener('click', newJoke)
twitterBtn1.addEventListener('click', tweetjoke)
linkedinBtn1.addEventListener('click', postjoke)
whatsappBtn1.addEventListener('click', sharejoke)

newnewsBtn.addEventListener('click', newNews)
twitterBtn2.addEventListener('click', tweetnews)
whatsappBtn2.addEventListener('click', sharenews)


//--------------------------------------------------------------------------------------------------------------------------

getQuotes()
getjokes()
getNews()

//--------------------------------------------------------------------------------------------------------------------------
