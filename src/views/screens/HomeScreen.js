import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    StyleSheet,
    Image,
    Pressable,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import COLORS from '../../constants/color';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import furnitures from '../../constants/furnitures';
const { width } = Dimensions.get('screen');

const HomeScreen = ({ navigation }) => {

    const categoryItems = [
        { name: 'Chair', iconName: 'seat-outline' },
        { name: 'Table', iconName: 'table-furniture' },
        { name: 'Cupboard', iconName: 'cupboard-outline' },
        { name: 'bed', iconName: 'bed-queen-outline' }
    ]

    // ListCategories Component
    const ListCategories = () => {
        const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0)
        return (
            <View style={styles.categoriesContainer}>
                {categoryItems.map((item, index) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        key={index}
                        onPress={() => setSelectedCategoryIndex(index)}
                    >
                        <View style={[styles.categoryItemBtn,
                        {
                            backgroundColor:
                                selectedCategoryIndex == index
                                    ? COLORS.primary
                                    : COLORS.light,
                        },
                        ]}>
                            <Icon name={item.iconName}
                                color={
                                    selectedCategoryIndex == index
                                        ? COLORS.white
                                        : COLORS.primary
                                }
                                size={20} />
                            <Text style={[styles.categoryText, {
                                color: selectedCategoryIndex == index
                                    ? COLORS.white
                                    : COLORS.primary
                            }]}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        )
    };


    // card component
    const Card = ({ furnitures }) => {
        return (
            <Pressable onPress={() => navigation.navigate('DetailsScreen', furnitures)}>
                <View style={styles.card}>
                    <Image
                        source={furnitures.image}
                        style={{
                            height: 120,
                            width: '100%',
                            borderRadius: 10
                        }}
                    />
                    <View style={styles.iconContainer}>
                        <Icon name='heart'
                            color={furnitures.liked ? COLORS.red : COLORS.primary}
                        />
                    </View>
                    <Text style={styles.cardName}>{furnitures.name}</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5
                    }}>
                        <Text style={styles.price}>{furnitures.price}</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>
                            <Icon name='star' color={COLORS.yellow} size={18} />
                            <Text style={styles.rating}>4.3</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        )
    };

    // popular card component
    const PopularItemCard = ({ furnitures }) => {
        return (
            <View style={styles.PopularItemCard}>
                <Image
                    source={furnitures.image}
                    style={{
                        width: 100,
                        height: '100%',
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        marginRight: 15
                    }}
                />
                <View style={{ paddingVertical: 15, justifyContent: 'center' }}>
                    <Text style={styles.cardName}>{furnitures.name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Text style={styles.price}>{furnitures.price}</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                            <Icon name='star' size={18} color={COLORS.yellow} />
                            <Text style={styles.rating}>4.3</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>

            {/* render Header component */}
            <View style={styles.header}>
                <Icon name='sort-variant' size={28} color={COLORS.primary} onPress={() => navigation.navigate('WelcomeScreen')}/>
                <Icon name='cart-outline' size={28} color={COLORS.primary} />
            </View>


            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.headerTitle}>Best Furniture For Your Home.</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                    <View style={styles.searchInput}>
                        <Icon name='magnify' size={25} color={COLORS.grey} />
                        <TextInput placeholder='Search' />
                    </View>
                    <View style={styles.sortBtn}>
                        <Icon name='tune' size={25} color={COLORS.white} />
                    </View>
                </View>
                <Text style={styles.title}>Category</Text>
                <ListCategories />
                <Text style={styles.title}>Top Furniture</Text>
                <FlatList
                    contentContainerStyle={{ paddingLeft: 20 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={furnitures}
                    renderItem={({ item }) => <Card furnitures={item} />}
                />
                <Text style={styles.title}>Popular</Text>
                <FlatList
                    contentContainerStyle={{ paddingLeft: 20 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={furnitures}
                    renderItem={({ item }) => <PopularItemCard furnitures={item} />}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    headerTitle: {
        fontSize: 23,
        width: "55%",
        paddingLeft: 20,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        lineHeight: 30
    },
    searchInput: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        backgroundColor: COLORS.light,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    sortBtn: {
        backgroundColor: COLORS.primary,
        width: 50,
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        paddingHorizontal: 20
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    categoryItemBtn: {
        flexDirection: 'row',
        backgroundColor: COLORS.light,
        padding: 10,
        alignItems: 'center',
        borderRadius: 4
    },
    categoryText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: COLORS.primary,
        marginLeft: 5,
    },
    card: {
        height: 200,
        backgroundColor: COLORS.white,
        width: width / 2.5,
        marginRight: 20,
        padding: 10,
        marginVertical: 20,
        shadowOffset: {
            height: 5,
            width: 5
        },
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        shadowRadius: 7,
        borderRadius: 10
    },
    cardName: {
        marginTop: 10,
        fontSize: 12,
        COLORS: COLORS.primary,
        fontWeight: 'bold'
    },
    price: {
        fontWeight: 'bold',
        color: COLORS.primary,
        fontSize: 12
    },
    rating: {
        fontWeight: 'bold',
        color: COLORS.primary,
        fontSize: 12
    },
    iconContainer: {
        height: 25,
        width: 25,
        backgroundColor: COLORS.white,
        position: 'absolute',
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowOffset: {
            height: 1,
            width: 1
        },
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25 / 2,
        shadowRadius: 4,
        top: 15,
        right: 15
    },
    PopularItemCard: {
        height: 90,
        width: width - 120,
        backgroundColor: COLORS.white,
        marginVertical: 20,
        marginRight: 20,
        borderRadius: 10,
        flexDirection: 'row',
        shadowOpacity: 0.2,
        shadowColor: 'black',
        shadowOffset: {
            height: 1,
            width: 1
        },

    }
})