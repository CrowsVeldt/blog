set -e

echo '** checking git status'

if [ "$1" != "--force" ]; then
  if [ -n "`git status --porcelain`" ]; then
    echo "Outstanding changes in repo!"
    echo
    git status
    exit 1
  fi
fi

DIR=`dirname $0`
TARGET=${DIR}/public

if [ -d "${TARGET}" ] ; then
  echo
  echo '** removing previous public folder'
  pushd ${TARGET} > /dev/null
  rm -rf *
  popd > /dev/null
fi

echo
echo '** building with gatsby'

gatsby build

echo
echo '** building RSS/Atom XML'

./run_script.sh generate_rss.js

echo
echo '** compressing files'

find ./public | grep -v \.gz$ | while read FILE;
do
  if [ -f "${FILE}" -a ! -f "${FILE}.gz" ] ; then
    echo "${FILE}"
    gzip -c -- "${FILE}" > "${FILE}.gz"
  fi
done

echo
echo "** done"
