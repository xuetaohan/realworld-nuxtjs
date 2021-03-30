import { request } from '@/plugins/request'

// 获取公共文章列表
export const getArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}

// 获取关注的用户文章列表
export const getFeedArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        // headers: {
        //     Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTUwMTA5LCJ1c2VybmFtZSI6Imt1bmxhbiIsImV4cCI6MTYyMTIwNzkwNH0.ZnltG-ZpG7G6EbKWk2Jg2otQrtiA0Z4wWnNm1ptcoio`
        // },
        params
    })
}

// 添加点赞
export const addFavorite = slug => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`,
    })
}

// 取消点赞
export const deleteFavorite = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`,
    })
}

// 获取文章详情
export const getArticle = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`,
    })
}

// 获取文章评论
export const getComments = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}/comments`,
    })
}