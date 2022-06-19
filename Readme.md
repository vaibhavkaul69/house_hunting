## How to Contribute

### To Add a New Data under Semi and Fully Furnished Categories

1. First go to `constants.ts` file and add a key entry under `flatPrimaryInfoInitialState` or `flatSecondaryInfoInitialState` based on which category it falls in.

2. Once the entry is made then add the corresponding value with a text alternative in `flatPrimaryInfoInputDataIfSemiFurnished` or `flatPrimaryInfoInputDataIfFullyFurnished` as per the category to which belongs as per point number 1.

3. Do not forget to add the key in the `house_hunting.type.d.ts` file to avoid Typescript Errors.
