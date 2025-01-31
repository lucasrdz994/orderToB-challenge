export const getTimestamps = () => {
  // Note: Dates need to be formatter acording user timezone
  const createdAt = new Date()
  const updatedAt = new Date()

  return { createdAt, updatedAt }
}
