window.onbeforeunload = function() {
  return "";
};

var app = new Vue({
    el: '#app',
    data: {
        view_selected: false,
        search: '',
        sections: [
            {
                title: 'Fresh vegetables',
                items: [
                    {name: 'Artichoke', selected: false},
                    {name: 'Arugula', selected: false},
                    {name: 'Asparagus', selected: false},
                    {name: 'Avocado', selected: false},
                    {name: 'Bamboo shoots', selected: false},
                    {name: 'Beets', selected: false},
                    {name: 'Bell peppers', selected: false},
                    {name: 'Bok choy', selected: false},
                    {name: 'Broccoli', selected: false},
                    {name: 'Brussels sprouts', selected: false},
                    {name: 'Cabbage', selected: false},
                    {name: 'Carrots', selected: false},
                    {name: 'Cassava', selected: false},
                    {name: 'Cauliflower', selected: false},
                    {name: 'Celery', selected: false},
                    {name: 'Chard', selected: false},
                    {name: 'Collard greens', selected: false},
                    {name: 'Corn', selected: false},
                    {name: 'Crisphead lettuce', selected: false},
                    {name: 'Cucumber', selected: false},
                    {name: 'Daikon', selected: false},
                    {name: 'Eggplant', selected: false},
                    {name: 'Endive', selected: false},
                    {name: 'Garlic', selected: false},
                    {name: 'Ginger', selected: false},
                    {name: 'Hot peppers', selected: false},
                    {name: 'Jicama', selected: false},
                    {name: 'Kale', selected: false},
                    {name: 'Kohlrabi', selected: false},
                    {name: 'Leaf lettuce', selected: false},
                    {name: 'Mushrooms', selected: false},
                    {name: 'Nopales', selected: false},
                    {name: 'Okra', selected: false},
                    {name: 'Onions', selected: false},
                    {name: 'Peas', selected: false},
                    {name: 'Potatoes', selected: false},
                    {name: 'Radishes', selected: false},
                    {name: 'Radicchio', selected: false},
                    {name: 'Romaine lettuce', selected: false},
                    {name: 'Shallots / Leeks', selected: false},
                    {name: 'Spinach', selected: false},
                    {name: 'Sprouts', selected: false},
                    {name: 'Squash', selected: false},
                    {name: 'Sweet potatoes', selected: false},
                    {name: 'Taro', selected: false},
                    {name: 'Tomatillo', selected: false},
                    {name: 'Tomatoes', selected: false},
                    {name: 'Turnips / Parsnips', selected: false},
                    {name: 'Water chestnuts', selected: false},
                    {name: 'Watercress', selected: false},
                    {name: 'Zucchini', selected: false}
                ]
            },
            {
                title: 'Nuts',
                items: [
                    {name: 'Almonds', selected: false},
                    {name: 'Brazil nuts', selected: false},
                    {name: 'Cashews', selected: false},
                    {name: 'Chestnuts', selected: false},
                    {name: 'Macadamia', selected: false},
                    {name: 'Peanuts', selected: false},
                    {name: 'Pecans', selected: false},
                    {name: 'Pine nuts', selected: false},
                    {name: 'Pistachios', selected: false},
                    {name: 'Walnuts', selected: false}
                ]
            },
            {
                title: 'Seeds',
                items: [
                    {name: 'Flax', selected: false},
                    {name: 'Lotus', selected: false},
                    {name: 'Pumpkin', selected: false},
                    {name: 'Sunflower', selected: false}
                ]
            },
            {
                title: 'Fresh fruits',
                items: [
                    {name: 'Apples', selected: false},
                    {name: 'Apricots', selected: false},
                    {name: 'Bananas', selected: false},
                    {name: 'Blackberries', selected: false},
                    {name: 'Blueberries ', selected: false},
                    {name: 'Cantelope', selected: false},
                    {name: 'Cherries', selected: false},
                    {name: 'Cranberries', selected: false},
                    {name: 'Dates / Figs', selected: false},
                    {name: 'Grapes', selected: false},
                    {name: 'Grapefruit', selected: false},
                    {name: 'Guava', selected: false},
                    {name: 'Honeydew / Muskmelon', selected: false},
                    {name: 'Kiwis', selected: false},
                    {name: 'Kumquats', selected: false},
                    {name: 'Lemons', selected: false},
                    {name: 'Limes', selected: false},
                    {name: 'Lychee', selected: false},
                    {name: 'Mango', selected: false},
                    {name: 'Mangosteen', selected: false},
                    {name: 'Nectarines', selected: false},
                    {name: 'Oranges', selected: false},
                    {name: 'Papaya', selected: false},
                    {name: 'Peaches', selected: false},
                    {name: 'Pears', selected: false},
                    {name: 'Pineapple', selected: false},
                    {name: 'Plantains', selected: false},
                    {name: 'Plums', selected: false},
                    {name: 'Pomegranate', selected: false},
                    {name: 'Quince', selected: false},
                    {name: 'Raspberries', selected: false},
                    {name: 'Rhubarb', selected: false},
                    {name: 'Strawberries', selected: false},
                    {name: 'Watermelon', selected: false},
                ]
            },
            {
                title: 'Beans',
                items: [
                    {name: 'Black beans', selected: false},
                    {name: 'Black-eyed peas', selected: false},
                    {name: 'Chickpeas', selected: false},
                    {name: 'Edamame', selected: false},
                    {name: 'Fava beans', selected: false},
                    {name: 'Kidney beans', selected: false},
                    {name: 'Lentils', selected: false},
                    {name: 'Lima beans', selected: false},
                    {name: 'Mung beans', selected: false},
                    {name: 'Navy beans', selected: false},
                    {name: 'Pinto beans', selected: false},
                    {name: 'Red beans', selected: false},
                    {name: 'Split peas', selected: false},
                    {name: 'White beans', selected: false},
                ]
            },
            {
                title: 'Grains',
                items: [
                    {name: 'Amaranth', selected: false},
                    {name: 'Barley', selected: false},
                    {name: 'Brown rice', selected: false},
                    {name: 'Buckwheat', selected: false},
                    {name: 'Bulgar', selected: false},
                    {name: 'Cornmeal', selected: false},
                    {name: 'Couscous', selected: false},
                    {name: 'Millet', selected: false},
                    {name: 'Oatmeal', selected: false},
                    {name: 'Quinoa', selected: false},
                    {name: 'Sorghum', selected: false},
                    {name: 'Wheat gluten (Seitan)', selected: false},
                    {name: 'White rice', selected: false},
                    {name: 'Wild rice', selected: false},
                ] 
            },
            {
                title: 'Herbs and spices',
                items: [
                    {name: 'Allspice', selected: false},
                    {name: 'Anise', selected: false},
                    {name: 'Bay leaf', selected: false},
                    {name: 'Basil', selected: false},
                    {name: 'Black pepper', selected: false},
                    {name: 'Cayenne pepper', selected: false},
                    {name: 'Celery seed', selected: false},
                    {name: 'Chives', selected: false},
                    {name: 'Chili powder', selected: false},
                    {name: 'Cilantro', selected: false},
                    {name: 'Cinnamon', selected: false},
                    {name: 'Clove', selected: false},
                    {name: 'Coriander', selected: false},
                    {name: 'Cumin', selected: false},
                    {name: 'Dill', selected: false},
                    {name: 'Fennel', selected: false},
                    {name: 'Garlic', selected: false},
                    {name: 'Lavender', selected: false},
                    {name: 'Lemongrass', selected: false},
                    {name: 'Marjoram', selected: false},
                    {name: 'Nutmeg', selected: false},
                    {name: 'Oregano', selected: false},
                    {name: 'Paprika', selected: false},
                    {name: 'Parsley', selected: false},
                    {name: 'Peppermint', selected: false},
                    {name: 'Poppy seed', selected: false},
                    {name: 'Red pepper', selected: false},
                    {name: 'Rosemary', selected: false},
                    {name: 'Saffron', selected: false},
                    {name: 'Sage', selected: false},
                    {name: 'Spearmint', selected: false},
                    {name: 'Tarragon', selected: false},
                    {name: 'Thyme', selected: false},
                    {name: 'Tumeric', selected: false},
                    {name: 'Vanilla', selected: false},
                ]
            },
            {
                title: 'Canned foods',
                items: [
                    {name: 'Applesauce', selected: false},
                    {name: 'Baked beans', selected: false},
                    {name: 'Chili', selected: false},
                    {name: 'Fruits', selected: false},
                    {name: 'Olives', selected: false},
                    {name: 'Soups', selected: false},
                    {name: 'Tomatoes', selected: false},
                    {name: 'Vegetable broth', selected: false},
                    {name: 'Veggies', selected: false},
                ]
            },
            {
                title: 'Condiments   &Sauces',
                items: [
                    {name: 'Agave nectar', selected: false},
                    {name: 'BBQ sauce', selected: false},
                    {name: 'Brown rice syrup', selected: false},
                    {name: 'Gravy', selected: false},
                    {name: 'Harissa', selected: false},
                    {name: 'Honey', selected: false},
                    {name: 'Hot sauce', selected: false},
                    {name: 'Jam / Jelly / Preserves', selected: false},
                    {name: 'Ketchup / Mustard', selected: false},
                    {name: 'Maple syrup', selected: false},
                    {name: 'Mayo product', selected: false},
                    {name: 'Peanut butter', selected: false},
                    {name: 'Ponzu', selected: false},
                    {name: 'Salad dressing', selected: false},
                    {name: 'Salsa', selected: false},
                    {name: 'Soy sauce', selected: false},
                    {name: 'Sriracha', selected: false},
                    {name: 'Stir fry sauce', selected: false},
                    {name: 'Tomato sauce', selected: false},
                    {name: 'Veg. Worcestershire', selected: false},
                ]
            },
            {
                title: 'Beverages',
                items: [
                    {name: 'Beer', selected: false},
                    {name: 'Club soda / Tonic', selected: false},
                    {name: 'Electrolyte water', selected: false},
                    {name: 'Juices', selected: false},
                    {name: 'Kombucha', selected: false},
                    {name: 'Liquor', selected: false},
                    {name: 'Mixers', selected: false},
                    {name: 'Soda pop', selected: false},
                    {name: 'Sports drink', selected: false},
                    {name: 'Wine', selected: false},
                ]
            },
            {
                title: 'Dairy & cheese or substitutes',
                items: [
                    {name: 'Almond butter', selected: false},
                    {name: 'Almond milk', selected: false},
                    {name: 'Bleu cheese', selected: false},
                    {name: 'Butter / Soy butter', selected: false},
                    {name: 'Cheddar', selected: false},
                    {name: 'Cottage cheese', selected: false},
                    {name: 'Cream cheese', selected: false},
                    {name: 'Cream / Soy creamer', selected: false},
                    {name: 'Feta', selected: false},
                    {name: 'Margarine / Soy marg.', selected: false},
                    {name: 'Milk / Soy milk', selected: false},
                    {name: 'Mozzarella', selected: false},
                    {name: 'Parmesan', selected: false},
                    {name: 'Provolone', selected: false},
                    {name: 'Rice milk', selected: false},
                    {name: 'Ricotta', selected: false},
                    {name: 'Sandwich slices', selected: false},
                    {name: 'Sour cream', selected: false},
                    {name: 'Swiss', selected: false},
                    {name: 'Whipped topping', selected: false},
                    {name: 'Yogurt / Soy yogurt', selected: false},
                ]
            },
            {
                title: 'Frozen',
                items: [
                    {name: 'Fries / Tater tots', selected: false},
                    {name: 'Ice cream / Soy I.C.', selected: false},
                    {name: 'Phyllo / Puff pastry', selected: false},
                    {name: 'Popsicles', selected: false},
                    {name: 'Prepared meals', selected: false},
                    {name: 'Sorbet', selected: false},
                    {name: 'Vegetables', selected: false},
                    {name: 'Veggie breakfasts', selected: false},
                    {name: 'Veggie burgers', selected: false},
                    {name: 'Veggie burritos', selected: false},
                    {name: 'Veggie pizzas', selected: false},
                ]
            },
            {
                title: 'Various groceries',
                items: [
                    {name: 'Cereal', selected: false},
                    {name: 'Chai', selected: false},
                    {name: 'Coffee / Filters', selected: false},
                    {name: 'Free-range eggs', selected: false},
                    {name: 'Egg substitute', selected: false},
                    {name: 'Lemon / Lime juice', selected: false},
                    {name: 'Liquid smoke flavor', selected: false},
                    {name: 'Nutritional yeast', selected: false},
                    {name: 'Pancake / Waffle mix', selected: false},
                    {name: 'Pasta', selected: false},
                    {name: 'Pickles', selected: false},
                    {name: 'Tahini', selected: false},
                    {name: 'Tea', selected: false},
                    {name: 'Tempeh', selected: false},
                    {name: 'Tofu', selected: false},
                    {name: 'TVP', selected: false},
                    {name: 'Veggie dogs', selected: false},
                ]
            },
            {
                title: 'Fresh-baked',
                items: [
                    {name: 'Bagels / Croissants', selected: false},
                    {name: 'Buns / Rolls', selected: false},
                    {name: 'Cake', selected: false},
                    {name: 'Donuts / Pastries', selected: false},
                    {name: 'Fresh / Sliced bread', selected: false},
                    {name: 'Pie! Pie! Pie!', selected: false},
                    {name: 'Pitas / Tortillas', selected: false},
                ]
            },
            {
                title: 'Home baking',
                items: [
                    {name: 'Baking powder / Soda', selected: false},
                    {name: 'Bread crumbs', selected: false},
                    {name: 'Cake icing / Decorations', selected: false},
                    {name: 'Cake / Brownie mix', selected: false},
                    {name: 'Chocolate chips / Cocoa', selected: false},
                    {name: 'Flour', selected: false},
                    {name: 'Stevia', selected: false},
                    {name: 'Sugar', selected: false},
                    {name: 'Sugar substitute', selected: false},
                    {name: 'Vegetable shortening', selected: false},
                    {name: 'Yeast', selected: false},
                ]
            },
            {
                title: 'Vinegars',
                items: [
                    {name: 'Apple cider vinegar', selected: false},
                    {name: 'Balsamic vinegar', selected: false},
                    {name: 'Red wine vinegar', selected: false},
                    {name: 'Rice vinegar', selected: false},
                    {name: 'White vinegar', selected: false},
                ]
            },
            {
                title: 'Oils',
                items: [
                    {name: 'Sesame oil', selected: false},
                    {name: 'Olive oil', selected: false},
                    {name: 'Vegetable oil', selected: false},
                ]
            },
            {
                title: 'Snacks',
                items: [
                    {name: 'Candy / Gum', selected: false},
                    {name: 'Cookies', selected: false},
                    {name: 'Crackers', selected: false},
                    {name: 'Dried fruit / Trail mix', selected: false},
                    {name: 'Granola / Cereal bars', selected: false},
                    {name: 'Popcorn', selected: false},
                    {name: 'Potato / Corn chips', selected: false},
                    {name: 'Prunes / Raisins', selected: false},
                    {name: 'Pretzels', selected: false},
                ]
            },
        ]
    },
    methods: {
        filteredItems: function(section) {
            var results = section.items.filter(item => {
                return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
            })
            return results;
        },
        showSection: function(section) {
            if (!this.view_selected) {
                var items = this.filteredItems(section);
                return items.length > 0;
            } else {
                for (var i in section.items)
                    if (section.items[i].selected)
                        return true;
                return false;
            }
        }
    }
})
