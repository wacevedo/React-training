import React from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';
import Loading from './Loading';

function SelectedLanguage (props) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
    <ul className='languages'>
            {languages.map((lang) => {
                return (
                    <li
                        style={lang === props.selectedLanguage ? {color: '#d0021b'}: null }
                        onClick={props.onSelect.bind(null, lang)}
                        key={lang}>
                        {lang}
                    </li>
                )
            })}
        </ul>
    )
}

SelectedLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
}

function RepoGrid (props) {
    return (
        <ul className='popular-list'>
            {props.repos.map((repo, index) => {
                return (
                 <li key={repo.name} className='popular-item'>
                    <div className='popular-rank'>#{index + 1}
                    <ul className='space-list-items'>
                        <li>
                            <img className='avatar'
                            src={repo.owner.avatar_url}
                            alt={'Avatar for '+repo.owner.login} />
                        </li>
                        <li><a href={repo.html_url}>{repo.name}</a></li>
                        <li>@{repo.owner.login}</li>
                        <li>{repo.stargazers_count} stars</li>
                    </ul>
                    </div>
                 </li>
                 )
                }
            )}
        </ul>
    )
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired,
}

class Popular extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };

        this.updateLanguage = this.updateLanguage.bind(this)
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage(lang) {
        this.setState(function () {
            return {
                selectedLanguage: lang,
                repos: null
            }
        });

        api.fetchPopularRepos(lang).then((repos) => {
            this.setState(function (){
                return {
                    repos: repos
                }
            })
        });
    }

    render() {
        return (
            <div>
                <SelectedLanguage
                  selectedLanguage={this.state.selectedLanguage}
                  onSelect={this.updateLanguage}
                />
                {!this.state.repos
                 ? <Loading />
                 : <RepoGrid repos={this.state.repos}/>
                }
            </div>
        )
    }
}

export default Popular;
