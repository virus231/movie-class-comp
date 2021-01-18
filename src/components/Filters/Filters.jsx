import React from 'react'

export default class Filters extends React.Component {

    render() {
        const {filters: {sort_by}} = this.props
        const {onChange} = this.props

        return (
            <form className="mb-3">
                <div className="form-group">
                    <label htmlFor="sort_by">Сортировать по</label>
                    <select
                        name="sort_by"
                        onChange={onChange}
                        id="sort_by"
                        value={sort_by}
                        className="form-control"
                    >
                        <option value="popularity.desc">Популярные по убыванию</option>
                        <option value="popularity.asc">Популярные по возрастанию</option>
                        <option value="vote_average.desc">Рейтинг по убыванию</option>
                        <option value="vote_average.asc">Рейтинг по возростанию</option>
                    </select>
                </div>
            </form>
        )
    }
}
