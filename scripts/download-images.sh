#!/bin/bash
# Download high-quality, royalty-free images from Unsplash for DineCastleRock listings
# Run this script from the project root: ./scripts/download-images.sh

cd "$(dirname "$0")/.."
mkdir -p public/images/listings

echo "Downloading listing images from Unsplash (free for commercial use)..."

# Restaurants
echo "Downloading restaurant images..."
curl -sL "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" -o public/images/listings/scileppis.jpg
curl -sL "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80" -o public/images/listings/castle-cafe.jpg
curl -sL "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" -o public/images/listings/trestles.jpg
curl -sL "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80" -o public/images/listings/savinas.jpg
curl -sL "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80" -o public/images/listings/bucket-list-tavern.jpg
curl -sL "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80" -o public/images/listings/cuba-cuba.jpg
curl -sL "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80" -o public/images/listings/union-bistro-hero.jpg

# Breweries
echo "Downloading brewery images..."
curl -sL "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80" -o public/images/listings/great-divide.jpg
curl -sL "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?w=800&q=80" -o public/images/listings/rockyard-brewing.jpg

# Bars & Nightlife
echo "Downloading bar images..."
curl -sL "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80" -o public/images/listings/courtyard-social.jpg
curl -sL "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80" -o public/images/listings/hideaway.jpg
curl -sL "https://images.unsplash.com/photo-1527761939622-93eb2c99a3e7?w=800&q=80" -o public/images/listings/whiskey-lodge.jpg
curl -sL "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80" -o public/images/listings/provision-bar.jpg
curl -sL "https://images.unsplash.com/photo-1575037614876-c38a4f0a7a26?w=800&q=80" -o public/images/listings/the-office-bar.jpg
curl -sL "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&q=80" -o public/images/listings/the-park-sports-bar.jpg
curl -sL "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80" -o public/images/listings/cork-and-keg.jpg

# Coffee & Cafes
echo "Downloading coffee shop images..."
curl -sL "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80" -o public/images/listings/lost-coffee.jpg
curl -sL "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&q=80" -o public/images/listings/crowfoot.jpg
curl -sL "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" -o public/images/listings/dazbog-coffee.jpg
curl -sL "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80" -o public/images/listings/black-rock-coffee.jpg

# Dessert & Bakery
echo "Downloading dessert images..."
curl -sL "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80" -o public/images/listings/nothing-bundt-cakes.jpg
curl -sL "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80" -o public/images/listings/crumbl-cookies.jpg
curl -sL "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&q=80" -o public/images/listings/sweet-cow-ice-cream.jpg

# Food Trucks
echo "Downloading food truck images..."
curl -sL "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?w=800&q=80" -o public/images/listings/biker-jims-dogs.jpg
curl -sL "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80" -o public/images/listings/taste-of-philly.jpg
curl -sL "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80" -o public/images/listings/rockin-tacos.jpg

# Takeout & Delivery
echo "Downloading takeout images..."
curl -sL "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80" -o public/images/listings/mod-pizza.jpg
curl -sL "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=800&q=80" -o public/images/listings/tokyo-joes.jpg
curl -sL "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=80" -o public/images/listings/noodles-company.jpg
curl -sL "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?w=800&q=80" -o public/images/listings/qdoba.jpg

echo ""
echo "All images downloaded successfully!"
echo "Images saved to public/images/listings/"
ls -la public/images/listings/
