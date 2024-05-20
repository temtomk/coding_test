def is_valid(word):
    valid_strings = ["aya", "ye", "woo", "ma"]
    for valid in valid_strings:
        word = word.replace(valid, ' ')
    return word.strip() == ''

def solution(babbling):
    valid_words = [word for word in babbling if is_valid(word)]

    return len(valid_words)