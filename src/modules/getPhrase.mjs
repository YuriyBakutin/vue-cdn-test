const counterFactory = () => {
    let counter = 0
    return () => counter++
}

const getCounter = counterFactory()

const phrases = [
    'Модуль, подгрузивший эту фразу, загрузился динамически.',
    'Хорошая погода! Не правда ли?',
    'Всё хорошо, что хорошо кончается.',
    'Не всё то золото, что блестит.',
]

const getPhrase = () => phrases[getCounter() % phrases.length]
export {getPhrase}
