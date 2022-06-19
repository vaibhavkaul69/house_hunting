## How to Contribute

### To Add a New Data under Semi and Fully Furnished Categories

1. First go to `constants.ts` file and add a key entry under `flatPrimaryInfoInitialState` or `flatSecondaryInfoInitialState` based on which category it falls in.

2. Once the entry is made in point number 1 then add the corresponding value with a text alternative in `flatPrimaryInfoInputDataIfSemiFurnished` or `flatPrimaryInfoInputDataIfSemiFurnished` as per the category to whichit falls in as specified in point 1.

3. Do not forget to add the key in the `house_hunting.type.d.ts` file to avoid Typescript Errors.
