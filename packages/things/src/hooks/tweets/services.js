export const fetchFn = ({ extra, options }) => {
    const searchQuery = new URLSearchParams({
        _limit: options?.limit || 10,
        _page: options?.page || 1,
        _sort: 'id',
        _order: 'desc'
    })
    return extra.apiClient(`tweets?${searchQuery}`)
}

export const postFn = ({
    extra,
    options: body
}) => extra.apiClient(
    'tweets',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
)

export const deleteFn = ({
    extra,
    options: id
}) => extra.apiClient(
    `tweets/${id}`,
    {
        method: 'DELETE'
    }
)
