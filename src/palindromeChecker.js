

export class PalindromeChecker {
    isPalindrome(text) {

        // console.log(text.match(/[a-zA-Z]+/g))
        let original_text_strings = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").match(/[a-zA-Z]+/g).join('').toLowerCase()
        //  console.log(original_text_strings)
        let reversed_text_strings = original_text_strings.split('').reverse().join('')
        //  console.log(reversed_text_strings)

        if (original_text_strings === reversed_text_strings) {
            alert('\"' + `${text}` + '\"' + ' é um palíndromo!')
        } else {
            alert('\"' + `${text}` + '\"' + ' não é um palíndromo!')
        }

    }

}