export const houseCleaner = (rawHouses) => {
  return rawHouses.map( house => {
    const {
      url,
      name,
      founded,
      seats,
      titles,
      coatOfArms,
      ancestralWeapons,
      words
    } = house
    return {
      url,
      name,
      founded,
      seats,
      titles,
      coatOfArms,
      ancestralWeapons,
      words
    }
  })
}