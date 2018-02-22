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
      words,
      swornMembers
    } = house

    const swornMemberIds = swornMembers.map(member => member.split('/')[5])

    return {
      url,
      name,
      founded,
      seats,
      titles,
      coatOfArms,
      ancestralWeapons,
      words,
      swornMemberIds
    }
  })
}