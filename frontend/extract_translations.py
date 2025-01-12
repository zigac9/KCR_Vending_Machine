# go through every file in app directory and extract all the strings that are wrapped in getLocaleStr function

import os
import re
import json

def extract_translations():
    translations = []
    for root, _, files in os.walk('app'):
        for file in files:
            if file.endswith('.ts') or file.endswith('.html') or file.endswith('.js') or file.endswith('.tsx'):
                with open(os.path.join(root, file), 'r') as f:
                    content = f.read()
                    matches = re.findall(r'getLocaleStr\(["\'](.*?)["\']\)', content)
                    translations.extend(matches)
    return translations

def main():
    translations = extract_translations()

    # read translations from translations.json file
    # int a dictionary
    # if the translation is not in the dictionary, add it

    if not os.path.exists('translations.json'):
        with open('translations.json', 'w') as f:
            f.write('{}')

    translations_dict = {}
    with open('translations.json', 'r') as f:
        translations_dict = json.load(f)

    # add new translations to the dictionary
    for translation in translations:
        if translation not in translations_dict:
            translations_dict[translation] = {"SI": translation, "EN": "", "DE": ""}

    
    # write the dictionary back to the translations.json file
    with open('translations.json', 'w') as f:
        json.dump(translations_dict, f, indent=4)


if __name__ == '__main__':
    main()