import type { $m } from 'typings/Module';

export default (LSSM: Vue, allWords: boolean, $m: $m): void => {
    const title = document.querySelector<HTMLHeadingElement>('#missionH1');
    if (!title) return;

    const greyClass = LSSM.$stores.root.nodeAttribute('arr-grey');

    LSSM.$stores.root.addStyle({
        selectorText: `.${greyClass}`,
        style: {
            filter: 'grayscale(0.75) !important',
            position: 'relative',
        },
    });

    if (!title.textContent) return;
    let wordsPreParsing: string = title.textContent;
    //Remove "reserved" phrases like "[Verband]" or "(Brandmeldeanlage)"
    const removeBeforeParsing = Object.values(
        $m(`arrHighlight.removeBeforeParsing`) as string
    );
    removeBeforeParsing.forEach(stringToRemove => {
        wordsPreParsing = wordsPreParsing.replace(stringToRemove, '');
        console.debug(wordsPreParsing);
    });
    const words = (
        wordsPreParsing
            ?.trim()
            .split(' ')
            .map(w => LSSM.$utils.escapeRegex(w.toLowerCase())) || []
    ).filter(w => w.length > 3);
    Array.from(document.querySelectorAll<HTMLAnchorElement>('.aao')).forEach(
        arr => {
            const arrText = arr.textContent?.trim().toLowerCase() || '';
            const filter = allWords ? words.every : words.some;
            if (!filter.call(words, w => arrText.match(w)))
                arr.classList.add(greyClass);
        }
    );
};
