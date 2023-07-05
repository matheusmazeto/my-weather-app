import React from 'react'
import { City } from '../../types/weatherTypes'
import { FavoritesCitiesContainer, SectionTitle } from './styles'
import { motion } from 'framer-motion'
import { FavoriteCity } from './FavoriteCity'
import { useSelector } from 'react-redux'
import { getFavoriteCities } from '../../store/selectors/favoritesSelectors'
import { lightTheme } from '../../styles/theme'

const FavoriteCities: React.FC<{
  favorites: City[]
  onRemoveFavorite: (city: City) => void
}> = ({ onRemoveFavorite }) => {
  const favoritesCities: City[] = useSelector(getFavoriteCities)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FavoritesCitiesContainer theme={lightTheme}>
        <SectionTitle data-testid="section-title" theme={lightTheme}>
          Cidades Favoritas
        </SectionTitle>
        {favoritesCities.map((favorite: City) => (
          <FavoriteCity
            data-testid="favorite-city-card"
            key={favorite.id}
            favorite={favorite}
            onRemoveFavorite={onRemoveFavorite}
          />
        ))}
      </FavoritesCitiesContainer>
    </motion.div>
  )
}

export default FavoriteCities
