const Right 
    = x => ({
        chain: f => f(x),
        map: f => Right(f(x)),
        fold: (error, success) => success(x),
        value: x
    })

const Left
    = x => ({
        chain: f => Left(x),
        map: f => Left(x),
        fold: (error, success) => error(x),
        value: x
    });


export const mapper 
    = json => {
        return heroSection(json, {})
            .chain(mapped => introduction(json, mapped))
            .chain(mapped => multiboard(json, mapped))
            .chain(mapped => duoImages(json, mapped))
            .chain(mapped => gallery(json, mapped))
            .chain(mapped => finalWords(json, mapped))
            .fold(c => new Error(c), c => c);

    }

const hasItems 
    = json => Array.isArray(json.items) && json.items.length === 1

const hasFields 
    = json => hasItems(json) && json.items[0].fields !== undefined;

const getFields 
    = json => json.items[0].fields;

const heroSection 
    = (json, mapped) => {
        if (!hasFields(json)) {
            return Left('Does not have contentful fields?');
        }

        let fields = getFields(json);
        
        if (fields.heroTitle !== undefined && fields.heroImage !== undefined) {
            return Right(Object.assign({}, mapped, {
                hero: {
                    title: fields.heroTitle,
                    image: fields.heroImage.fields.file.url
                }
            }));
        } else {
            return Left('Hero section is missing');
        }
    }

const introduction 
    = (json, mapped) => {
        if (!hasFields(json)) {
            return Left('Does not have fields');
        }
        
        let fields = getFields(json);
        
        let cloned = Object.assign({}, mapped);
        
        if (fields.projectInfo === undefined) {
            return Right(cloned);
        }

        let meta = [];

        if (fields.awards !== undefined) {
            meta.push({
                title: 'Awards',
                value: fields.awards
            })
        }

        if (fields.clientName !== undefined) {
            meta.push({
                title: 'Client',
                value: fields.clientName
            })
        }

        if (fields.shoutOuts !== undefined) {
            meta.push({
                title: 'Shout outs',
                value: fields.shoutOuts
            });
        }

        if (meta.length === 0) {
            return Right(cloned);
        }

        cloned.introduction = {
            meta,
            blurb: fields.projectInfo
        }

        return Right(cloned);

    }

const multiboard
    = (json, mapped) => {
        if (!hasFields(json)) {
            return Left('Does not have contentful fields?');
        }

        let fields = getFields(json);

        let cloned = Object.assign({}, mapped);

        if (fields.multiboardBlurb === undefined
            || fields.multiboardSmallImage === undefined
            || fields.multiboardLargeImage === undefined) {
                
            return Right(cloned);
        }

        cloned.multiboard = {}

        if (fields.multiboardTitle !== undefined) {
            cloned.multiboard.title = fields.multiboardTitle;
        }

        cloned.multiboard.smallImage = fields.multiboardSmallImage.fields.file.url;
        cloned.multiboard.largeImage = fields.multiboardLargeImage.fields.file.url;
        cloned.multiboard.blurb = fields.multiboardBlurb;

        return Right(cloned);
    }

const duoImages
    = (json, mapped) => {
        if (!hasFields(json)) {
            return Left('Does not have contentful fields?');
        }

        let fields = getFields(json);

        let cloned = Object.assign({}, mapped);

        if (fields.duoBoardImages === undefined) {
            return Right(cloned);
        }

        if (Array.isArray(fields.duoBoardImages) && fields.duoBoardImages.length !== 2) {
            return Right(cloned);
        }

        cloned.duoImages = fields.duoBoardImages.map(image => {
            return image.fields.file.url
        })

        return Right(cloned);
    }

const gallery
    = (json, mapped) => {
        if (!hasFields(json)) {
            return Left('Does not have contentful fields?');
        }

        let fields = getFields(json);

        let cloned = Object.assign({}, mapped);

        if (fields.gallery === undefined) {
            return Right(cloned);
        }

        if (Array.isArray(fields.gallery) && fields.gallery.length !== 6) {
            return Right(cloned);
        }

        cloned.gallery = fields.gallery.map(image => {
            return image.fields.file.url
        });

        return Right(cloned);
    }

const finalWords
    = (json, mapped) => {
        if (!hasFields(json)) {
            return Left('Does not have contentful fields?');
        }

        let fields = getFields(json);

        let cloned = Object.assign({}, mapped);

        if (fields.finalWords === undefined || fields.finalWordsImage === undefined) {
            return Right(cloned);
        }

        cloned.finalWords = {
            text: fields.finalWords,
            image: fields.finalWordsImage.fields.file.url
        }

        return Right(cloned);
    }