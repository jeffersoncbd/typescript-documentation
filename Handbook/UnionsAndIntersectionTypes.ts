/** Union Types */
function padLeft(padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + 'hello world'
  }
  if (typeof padding === 'string') {
    return  padding + 'hello world'
  }
}
padLeft(2)
padLeft(' ')


/** Unions with Common Fields */
interface Bird {
  fly(): void
  layEggs(): void
}
interface Fish {
  swim(): void
  layEggs(): void
}
declare function getSmallPet(): Bird | Fish
const pet = getSmallPet()
pet.layEggs()


/** Discriminating Unions */
type NetworkLoadingState = { state: 'loading' }
type NetworkFailedState = { state: 'failed', code: number }
type NetworkSuccessState = { state: 'success', response: { title: string } }
type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState
function networkStatus(network: NetworkState): string {
  switch (network.state) {
    case 'loading':
      return 'Downloading...'
    
    case 'failed':
      return `Error ${network.code} downloading`
    
    case 'success':
      return `Downloaded ${network.response.title}`
  }
}


/** Intersection Types */
interface ErrorHandling {
  error?: { message: string }
}
interface ArtworksData {
  artworks: { title: string }[]
}
interface ArtistsData {
  artists: { name: string }[]
}
type ArtworksResponse = ArtworksData & ErrorHandling
type ArtistsResponse = ArtistsData & ErrorHandling
const handleArtworksResponse = (response: ArtworksResponse) => {
  if (response.error) {
    console.log(response.error.message)
    return
  }
  console.log(response.artworks)
}
const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.log(response.error.message)
    return
  }
  console.log(response.artists)
}


/** Mixins via Intersections */
